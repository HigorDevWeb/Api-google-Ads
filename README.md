# Google Ads API Token Generator

Este projeto é um gerador de tokens para a API do Google Ads usando o OAuth2. A aplicação obtém o token de acesso e o token de atualização que podem ser utilizados para acessar a API do Google Ads e a ferramenta Keyword Planner.

## Estrutura do Projeto

- **index.js**: Contém o código principal que configura o cliente OAuth2, gera a URL de autorização, e obtém os tokens de acesso e atualização.
- **tokens.mjs**: Similar ao `index.js`, este arquivo faz a mesma configuração e obtenção de tokens, mas utilizando módulos ES6.
- **.env**: Arquivo que contém as variáveis de ambiente necessárias para a configuração do cliente OAuth2, como `CLIENT_ID` e `CLIENT_SECRET`.

## Configuração do Acesso à API do Google Ads

### Passo 1: Criar um Projeto no Google Cloud

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/).
2. Crie um novo projeto ou selecione um existente.
3. Navegue até IAM & Admin > Criar Projeto.
4. Nomeie seu projeto e clique em Criar.

### Passo 2: Ativar a API do Google Ads

1. No painel do projeto, vá para APIs & Serviços.
2. Clique em Habilitar APIs e Serviços.
3. Pesquise por "Google Ads API" e clique em Habilitar.

### Passo 3: Configurar Credenciais OAuth 2.0

1. Em APIs & Serviços, vá para Credenciais.
2. Clique em Criar Credenciais e escolha IDs de Cliente OAuth 2.0.
3. Escolha Aplicativo da Web como o tipo de aplicativo.
4. Adicione URIs de redirecionamento autorizados (para desenvolvimento local, você pode usar `http://localhost`).
5. Baixe as credenciais OAuth (ID do cliente e segredo do cliente).

### Passo 4: Obter um Token de Desenvolvedor

1. Acesse sua conta do Google Ads.
2. Na conta, vá para Ferramentas & Configurações > Configuração > Centro de API.
3. Solicite um Token de Desenvolvedor (este inicialmente estará em modo de teste).

### Passo 5: Vincular Conta do Google Ads

Certifique-se de que você tem acesso a uma conta do Google Ads Manager para acessar a API do Keyword Planner. Siga a documentação da API do Google Ads para vincular sua conta do Google Ads.

## Instalação e Configuração da Biblioteca Cliente da API do Google Ads no Node.js

### Passo 6: Instalar a Biblioteca Cliente da API do Google Ads para Node.js

Se ainda não tiver criado um projeto Node.js, siga os passos abaixo:

1. Crie um novo projeto Node.js:

    ```bash
    mkdir google-ads-api-js
    cd google-ads-api-js
    npm init -y
    ```

2. Instale as dependências necessárias:

    ```bash
    npm install google-ads-api dotenv express
    ```

    - **google-ads-api**: A biblioteca cliente oficial da API do Google Ads para Node.js.
    - **dotenv**: Para carregar variáveis de ambiente a partir de um arquivo `.env`.
    - **express**: Para construir o servidor da API.

## Uso

1. Execute o arquivo `index.js` ou `tokens.js`:

    ```bash
    node index.js
    ```

    ou

    ```bash
    node tokens.mjs
    ```

2. Uma URL será gerada e exibida no console. Visite essa URL no navegador para autorizar o acesso à sua conta do Google Ads.

3. Após a autorização, você será redirecionado para uma URL que contém um código de autorização. Copie este código.

4. No arquivo `index.js` ou `tokens.mjs`, substitua a variável `codeFromAuthUrl` pelo código copiado.

5. Execute o arquivo novamente para obter os tokens de acesso e atualização.

## Contribuição

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`).
3. Faça commit das suas alterações (`git commit -m 'Add some AmazingFeature'`).
4. Dê push para a branch (`git push origin feature/AmazingFeature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
