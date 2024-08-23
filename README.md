# Your Podcast

Your Podcast é uma plataforma online para criação, upload e compartilhamento de podcasts.
Inspirado no YouTube, o site é focado exclusivamente em podcasts, permitindo que os usuários façam uploads de seus áudios e gerenciem seus episódios.

## Funcionalidades
- Upload de áudios em formatos variados
- Fila de uploads para evitar carga no servidor
- Sistema de login e cadastro com autenticação JWT
- Interface interativa construída com Vue.js

## Tecnologias utilizadas
- **Frontend:** Vue.js
- **Backend:** Node.js com Express
- **Banco de Dados:** MySQL
- **Autenticação:** JWT
- **Outros:** Knex.js (para as migrations), vue-cropper.js

## Instalação
### 1) clone este repositório
```
$ git clone https://github.com/sadiegoc/yourpodcast.git
```
### 2) instale as dependências
```
$ cd yourpodcast/backend
$ npm install --save

$ cd yourpodcast/frontend
$ npm install --save
```

### 3) configure o arquivo .env
Há um .env.example no diretório do backend, do qual pode ser usado como modelo para suas configurações

### 4) inicie o servidor backend
```
$ npm run start
```

### 5) inicie o frontend
```
$ npm run serve
```

## Uso
Após a instalação, acesse **http://localhost:8080** no navegador para interagir com o aplicativo.

## Contribuições
Constribuições são muito bem vindas! Sinta-se a vontade para fazer um pull request.

## Licença
Este projeto está licenciado sob a licença MIT.

## Autor
Desenvolvido por [sadiegoc](https://github.com/sadiegoc)
