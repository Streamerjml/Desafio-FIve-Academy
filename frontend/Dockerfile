# Baixa uma imagem node no Docker Hub
FROM node

# Define a pasta padrão de trabalho
WORKDIR /view

# Copia os arquivos json, para a pasta de trabalho criada no passo acima
COPY package*.json /view/

# Baixa e estala o npm pra rodar a plicação
RUN npm install

# Copia o conteúdo para a pasta de trabalho
COPY . .

# # dexa a porta 4040 exposta para que saibam a porta utilizada no docker
EXPOSE 8080

# Comando para subir aplicação
CMD [ "npx", "http-server" ]