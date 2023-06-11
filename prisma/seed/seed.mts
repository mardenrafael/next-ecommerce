import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";
import { randomUUID } from "crypto";

const { genSalt, hash } = bcryptjs;

const prisma = new PrismaClient();

async function main() {
  let env: "development" | "test" | "production" = "development";
  let verbose: boolean = false;
  let userQtd: number = 500;
  let prodQtd: number = 10;
  let startTime = Date.now();

  process.argv.forEach((val, idx, args) => {
    if (val == "--env" || val == "-e") {
      let value = args[idx + 1];

      switch (value) {
        case "development" || "dev":
          env = "development";
          console.log(`> Ambiente configurado como ${value}`);
          break;
        case "test":
          env = "test";
          console.log(`> Ambiente configurado como ${value}`);
          break;
        case "production" || "prod":
          env = "production";
          console.log(`> Ambiente configurado como ${value}`);
          break;

        default:
          env = "development";
          console.log(`> Argumento invalido ${value} para ${val}`);
          console.log(`> Usando valor padrão -> ${env}`);
          break;
      }
    }

    if (val == "--verbose" || val == "-v") {
      verbose = true;
      console.log(`> Modo verboso ativado`);
    }

    if (val == "--user" || val == "-u") {
      let value = parseInt(args[idx + 1]);

      if (Number.isNaN(value) || value >= 0) {
        userQtd = value;
      }
      console.log(`> Criando ${userQtd} usuarios`);
    }

    if (val == "--products" || val == "-p") {
      let value = parseInt(args[idx + 1]);

      if (Number.isNaN(value) || value >= 0) {
        prodQtd = value;
      }
      console.log(`> Criando ${prodQtd} produtos para cada usuarios`);
    }
  });

  if (verbose) {
    console.log("> Iniciando processo de seed no banco de dados");
  }

  if (verbose) {
    console.log("> Conectando com o banco de dados");
  }
  prisma
    .$connect()
    .then(async () => {
      if (verbose) {
        console.log("> Conectado com sucesso");
      }

      if (env == "development") {
        const userCriationStartTime = Date.now();
        console.log("> Criando usuarios");

        const salt = await genSalt(12);
        const hashedPassword = await hash("12345678", salt);

        for (let i = 0; i < userQtd; i++) {
          if (verbose) {
            console.log(`> Criando usuario ${i}`);
          }
          const userId = randomUUID();

          await prisma.user.create({
            data: {
              id: userId,
              name: `usuario ${i}`,
              password: hashedPassword,
              email: `usuario${i}@gmail.com`,
              terms: true,
            },
          });

          if (verbose) {
            console.log(`> Criado usuario ${i} com sucesso`);
          }

          for (let j = 0; j < prodQtd; j++) {
            if (verbose) {
              console.log(`> Criando produto ${j}`);
            }

            const productId = randomUUID();

            await prisma.product.create({
              data: {
                id: productId,
                name: `produto ${j}`,
                price: 250.0,
                description: `id do produto ${productId}`,
                userId: userId,
              },
            });

            if (verbose) {
              console.log(
                `> Criado produto ${j} para o usuario ${userId} com sucesso`
              );
            }
          }
        }

        if (verbose) {
          console.log(
            `> Usuarios criados em ${Date.now() - userCriationStartTime}ms`
          );
        }
      }

      if (verbose) {
        console.log(`> Tempo total ${Date.now() - startTime}`);
      }
    })
    .catch((e) => {
      if (verbose) {
        console.error(`> Erro ao conectar com banco de dados ${e}`);
      } else {
        console.error(
          "> Erro ao conectar com banco de dados, para mais informações use '--verbose'"
        );
      }
    });
}

main()
  .then(async () => {
    prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
