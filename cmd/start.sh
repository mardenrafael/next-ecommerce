#!/bin/sh
/usr/local/bin/docker-entrypoint.sh

echo "#####################################################"
echo "# Reiniciando banco de dados e aplicando migrations #"
echo "#####################################################"


echo "#######################"
echo "# Iniciando o sistema #"
echo "#######################"
npm run dev