# Clima das Cidades

Este é um projeto que exibe a temperatura atual de três cidades e fornece sugestões de vestimenta com base na temperatura. Os dados são obtidos em tempo real através da API do OpenWeatherMap.

## Funcionalidades

- Exibe a temperatura atual das cidades selecionadas
- Sugere vestimentas de acordo com a temperatura
- Mostra a média anual de temperatura de cada cidade
- Interface moderna e responsiva

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- OpenWeatherMap API
- Vercel (para hospedagem)

## Instalação e Execução

###1. Clone este repositório:
- git clone https://github.com/seu-usuario/PRJ_Temperatura.git

###2. Acesse o diretório do projeto:
- cd PRJ_Temperatura
  
###3. Abra o arquivo `index.html` no navegador ou use um servidor local para evitar problemas de CORS.

## Configuração da API

###1. Crie uma conta no [OpenWeatherMap](https://home.openweathermap.org/users/sign_up)

###2. Obtenha uma chave de API e configure a variável de ambiente na Vercel:
- Vá para **Settings** → **Environment Variables**
- Adicione `OPENWEATHER_API_KEY` com o valor da sua chave de API
- 
###3. No arquivo `api/weather.js`, a chave de API será usada dinamicamente.

## Como Hospedar no Vercel

###1. Instale a CLI da Vercel, caso ainda não tenha:
- npm install -g vercel

###2. Faça login:
- vercel login

###3. Execute o deploy:
- vercel

###4. O link do projeto será fornecido ao final do processo.
