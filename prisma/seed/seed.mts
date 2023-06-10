import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

async function main() {
  let env: "development" | "test" | "production" = "development";
  let verbose: boolean = false;
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

        if (verbose) {
          console.log("> Criando usuario 001");
        }
        const usuario001 = await prisma.user.create({
          data: {
            id: randomUUID(),
            name: "usuario 001",
            password: "12345678",
            email: "usuario001@gmail.com",
            terms: true,
          },
        });

        if (verbose) {
          console.log("> Criado usuario 001 com sucesso");
        }

        if (verbose) {
          console.log("> Criando usuario 002");
        }
        const usuario002 = await prisma.user.create({
          data: {
            id: randomUUID(),
            name: "usuario 002",
            password: "12345678",
            email: "usuario002@gmail.com",
            terms: true,
          },
        });
        if (verbose) {
          console.log("> Criado usuario 002 com sucesso");
        }
        if (verbose) {
          console.log("> Criando usuario 003");
        }
        const usuario003 = await prisma.user.create({
          data: {
            id: randomUUID(),
            name: "usuario 003",
            password: "12345678",
            email: "usuario003@gmail.com",
            terms: true,
          },
        });
        if (verbose) {
          console.log("> Criado usuario 003 com sucesso");
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
