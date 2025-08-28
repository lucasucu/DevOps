# Usa imagem oficial do Node.js
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia arquivos de dependências primeiro (para otimizar cache)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Expõe a porta (se o servidor escutar em outra porta, ajuste aqui)
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
