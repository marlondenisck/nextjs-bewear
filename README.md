## Bewear

<img src="./Capa.png" alt="Bewear Logo" width="600" />

### Autenticação via Google
- Va te cloud console
- Crie um novo projeto
- Vá em "APIs e Serviços" > "Credenciais"
- Clique em "Criar Credenciais" > "ID do Cliente OAuth"
- Clique no submenu "Tela de consentimento OAuth"
- Adicione no formulário nome, email
- Em Audiências: external
- Apos isso na proxima tela selecione "Criar cliente OAuth"
- Selecione "Aplicativo da Web"
- Dê um nome para o cliente
- Autorize os origens JavaScript: `http://localhost:3000`
- Adicione os URIs de redirecionamento autorizados: `http://localhost:3000/api/auth/callback/google`
- Copie o ID do cliente e o segredo do cliente para os próximos passos


## Stripe
- Crie uma conta no Stripe
- No dashboard do Stripe, vá em "Developers" > "API Keys"
- Copie a "Publishable key" e a "Secret key" para os próximos passos
- Vá em "Developers" > "Webhooks"
- Clique em "Teste ouvinte local"
- Siga as instruções para instalar o Stripe CLI
- Após instalar, rode o comando abaixo para iniciar o webhook listener:
  ```bash
  stripe listen --forward-to localhost:3000/api/webhooks/stripe
  ```
- Copie o "Signing secret" do retorno da chamada ao webhook e adicione no seu env
