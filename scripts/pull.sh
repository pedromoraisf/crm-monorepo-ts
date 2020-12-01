#!/bin/bash

# Brancs de desenvolvimento que temos no contexto
BRANCH_PRODUCAO="master"
BRANCHS_DESENVOLVIMENTO=("dev-pedro" "dev-jao")

function deixarOkBranchDesenvolvimento {
  # Realizando operações iniciais com o GIT
  git checkout $BRANCH_DESENVOLVIMENTO
  git add .
  git commit -m "@$MENSAGEM_COMMIT"

  # Obtendo o tamanho do array de branchs de desenvolvimento
  BRANCHS_DESENVOLVIMENTO_LENGTH=${#BRANCHS_DESENVOLVIMENTO[@]};

  # Realizando o pull com as branches de desenvolvimento antes do push
  for i in $(seq 0 $BRANCHS_DESENVOLVIMENTO_LENGTH); do
    if [[ ${BRANCHS_DESENVOLVIMENTO[i]} != "" ]]
    then
      git pull origin ${BRANCHS_DESENVOLVIMENTO[i]}
    fi
  done

  # Finalizando a operação com o push
  git push origin $BRANCH_DESENVOLVIMENTO

  echo -e "\n[✅] Operação realizada com sucesso\n"
}

function subirPraProducao {
  # Realizo um laço pra verificação de operação
  RESPOSTA_FUNCAO=0

  echo -e "\n[🤖] Se estiver fazendo isso na sexta-feira, tome cuidado...\n"

  until [[ $RESPOSTA_FUNCAO -eq 1 || $RESPOSTA_FUNCAO -eq 2 ]]
  do
    read -p "[🤖] Deseja subir o codigo pra produção 🤩? [1] Sim [2] Não " RESPOSTA_FUNCAO

    # Realizo a operação de subir pra branch de teste
    if [[ RESPOSTA_FUNCAO -eq 1 ]]
    then
      git checkout $BRANCH_PRODUCAO
      git merge $BRANCH_DESENVOLVIMENTO
      git push origin $BRANCH_PRODUCAO
      git checkout $BRANCH_DESENVOLVIMENTO

      echo -e "\n[✅] Operação realizada com sucesso\n"
    fi

    # Kito a função e passo pra próxima
    if [[ RESPOSTA_FUNCAO -eq 2 ]]
    then
      git checkout $BRANCH_DESENVOLVIMENTO

      echo -e "\n[❌] Cancelando operação\n"

      return 0
    fi
  done
}

# Escopo global de operações
read -p "[🤖] Digite o nome da sua branch de desenvolvimento: " BRANCH_DESENVOLVIMENTO
read -p "[🤖] Digite a mensagem de commit: " MENSAGEM_COMMIT

# Escopo funcional de operações
deixarOkBranchDesenvolvimento
subirPraProducao
