#!/bin/sh
/usr/local/bin/docker-entrypoint.sh

echo "#####################################################"
echo "# Reiniciando banco de dados e aplicando migrations #"
echo "#####################################################"
npx prisma migrate reset -f


echo "#######################"
echo "# Iniciando o sistema #"
echo "#######################"
npm run dev