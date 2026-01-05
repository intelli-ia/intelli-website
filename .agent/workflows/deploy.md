---
description: Como hospedar o projeto na Vercel
---

Para hospedar este projeto na Vercel, siga os passos abaixo:

1. **Acesse a Vercel**: Vá para [vercel.com](https://vercel.com) e faça login com sua conta do GitHub.
2. **Importe o Repositório**: Clique em "Add New" -> "Project" e selecione o repositório `intelli-website`.
3. **Configure o Diretório Raiz**:
   - Como o código do frontend está na pasta `web`, você **precisa** configurar o **Root Directory**.
   - Na tela de configuração, procure por "Root Directory" e clique em "Edit".
   - Selecione a pasta `web`.
4. **Verifique as Configurações de Build**:
   - O Framework Preset deve ser detectado automaticamente como **Vite**.
   - O Build Command deve ser `npm run build` ou `vited build`.
   - O Output Directory deve ser `dist`.
5. **Variáveis de Ambiente**: Se o seu projeto precisar de chaves de API, adicione-as na seção "Environment Variables".
6. **Deploy**: Clique em "Deploy" e aguarde a finalização.

Após o primeiro deploy, qualquer push para a branch principal no GitHub disparará um novo deploy automático.
