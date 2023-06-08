#!/bin/sh
/usr/local/bin/docker-entrypoint.sh

echo "#####################################################"
echo "# Reiniciando banco de dados e aplicando migrations #"
echo "#####################################################"
# npm run typeorm migration:run -- -d ./src/database/dataSource.ts

echo "#######################"
echo "# Iniciando o sistema #"
echo "#######################"
npm run dev