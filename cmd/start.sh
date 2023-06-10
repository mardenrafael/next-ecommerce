#!/bin/sh
/usr/local/bin/docker-entrypoint.sh

echo "#####################################################"
echo "# Reiniciando banco de dados e aplicando migrations #"
echo "#####################################################"
npx prisma migrate reset -f

echo "##################################"
echo "# Fazendo seed no banco de dados #"
echo "##################################"
npm run prisma:seed -- --env development -v --user 2500

echo "#######################"
echo "# Iniciando o sistema #"
echo "#######################"
npm run dev