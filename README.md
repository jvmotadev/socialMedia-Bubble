# SocialMedia-Bubble: Front-End 🫧

Este projeto refere-se ao desenvolvimento do front-end da rede social fictícia **Bubble**, criada como parte do curso Web Dev Full-Stack da Códigos do Amanhã (Resilia | Ebanx). O [back-end](https://github.com/Renato-Miranda/socialMedia-API) foi desenvolvido na etapa anterior e agora, nesta fase, nosso foco é construir uma interface interativa e amigável para os usuários 🚀.

## Índice 📑

- [Sobre o Projeto](#sobre-o-projeto) 🌟
- [Apresentação](#apresentação) 🖼
- [Páginas do Projeto](#páginas-do-projeto) 🖥
- [Tecnologias Utilizadas](#tecnologias-utilizadas) 💻
- [Integração com o Back-End](#integração-com-o-back-end) 🔄
- [Instalação e Execução](#instalação-e-execução) 🛠
- [Estrutura do Projeto](#estrutura-do-projeto) 🗂
- [Contribuidores](#contribuidores) 👥
- [Contribuição](#contribuição) 🙌
- [Licença](#licença) 📄

## Sobre o Projeto

Apresentamos a **Bubble** 🫧, uma inovadora rede social que está reformulando a maneira como nos conectamos no ambiente digital! 
Nossa missão no projeto atual é criar um front-end robusto que possa interagir de maneira eficaz com a [API](https://github.com/Renato-Miranda/socialMedia-API) desenvolvida anteriormente. Ele consome todos os endpoints criados para a API, proporcionando aos usuários uma experiência completa de rede social.

## Apresentação

Mergulhe conosco na nossa jornada de criação, desde a ideia inicial até a execução, por meio da nossa apresentação detalhada disponível no [Canva](https://www.canva.com/design/DAFyldkDfw0/DSO3v83jkFe77YXj_e1yVw/edit?utm_content=DAFyldkDfw0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton).

## Páginas do Projeto

- **LandingPage:** Página inicial (Home) com informações sobre a Bubble.
- **Cadastro:** Página para criação de novas contas.
- **Login:** Página de login.
- **Feed:** Página principal da rede social, onde os posts são exibidos e criados.
- **RedefinirSenha:** Página para redefinição de senha.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React-Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Styled-Components](https://styled-components.com/)
- [React-Icons](https://react-icons.github.io/react-icons/)

## Integração com o Back-End

O front-end é totalmente integrado ao back-end, que pode ser encontrado em: [https://github.com/Renato-Miranda/socialMedia-API](https://github.com/Renato-Miranda/socialMedia-API). Todas as rotas da API estão sendo consumidas pelo front-end, proporcionando a funcionalidade completa da aplicação.

## Instalação e Execução

1. Clone este repositório:
```sh
git clone https://github.com/Joa1zin/socialMedia-Bubble
```

2. Navegue até o diretório do projeto:
```sh
cd socialMedia-Bubble
```

3. Instale as dependências:
```sh
npm install
```

4. Execute o projeto:
```sh
npm run dev
```

Agora, você pode acessar o projeto na porta local no seu navegador, identificada no terminal 🌍.

## Estrutura do Projeto

A estrutura de diretórios do projeto foi organizada da seguinte forma:

- **src/** - Contém o código-fonte do projeto.
- **assets/** - Ícones e outros recursos gráficos.
- **components/** - Componentes reutilizáveis como botões, campos de texto, modais, entre outros.
- **pages/** - As páginas do aplicativo, como a página de login, feed, cadastro e landing page.
- **services/** - Scripts para interagir com a API.
- **style/** - Estilos globais e temas.
- **utils/** - Funções utilitárias.
- **main.jsx** - O ponto de entrada do aplicativo.
- **routes.jsx** - As rotas do aplicativo.
- **public/** - Contém arquivos públicos como imagens e SVGs.
- **css/** - Folhas de estilo.
- **vite.config.js** - Configuração do Vite. 
E demais arquivos de configuração.

**Veja o mapa completo da Estrutura do Projeto:**
```
📦 nome_do_projeto
┣ 📜 .eslintrc.cjs
┣ 📜 .gitignore
┣ 📜 index.html
┣ 📜 package-lock.json
┣ 📜 package.json
┣ 📜 README.md
┣ 📜 vite.config.js
┣ 📂 public
│   ┣ 📜 adicionar.svg
│   ┣ 📜 bg-cadastro.png
│   ┣ 📜 bubble-rec-senha.png
│   ┣ 📜 curtidas.svg
│   ┣ 📜 foto-ana-luiza.png
│   ┣ 📜 icons8-close.svg
│   ┣ 📜 icons8-lixeira.svg
│   ┣ 📜 login-bg.png
│   ┣ 📜 logo-bubble-b.svg
│   ┣ 📜 logo-bubble-w.svg
│   ┣ 📜 lp-bg-shape-x.png
│   ┣ 📜 lp-cadastre.png
│   ┣ 📜 menu-hamburguer-grande.svg
│   ┗ 📜 white-logo-x-bubble.svg
┣ 📂 src
│   ┣ 📜 main.jsx
│   ┣ 📜 routes.jsx
│   ┣ 📂 assets
│   │   ┗ 📂 icons
│   │       ┗ 📜 menu-hamburguer.svg
│   ┣ 📂 components
│   │   ┣ 📂 common
│   │   │   ┣ 📂 Button
│   │   │   │   ┣ 📜 Button.jsx
│   │   │   │   ┗ 📜 Button.style.jsx
│   │   │   ┣ 📂 Footer
│   │   │   │   ┣ 📜 Footer.jsx
│   │   │   │   ┗ 📜 footer.style.jsx
│   │   │   ┣ 📂 Header
│   │   │   │   ┣ 📜 Header.jsx
│   │   │   ┣ 📂 Input
│   │   │   │   ┣ 📜 Input.jsx
│   │   │   ┣ 📂 Modal
│   │   │   │   ┣ 📜 Modal.jsx
│   │   │   ┣ 📂 TextField
│   │   │       ┣ 📜 TextField.jsx
│   │   │       ┗ 📜 TextField.style.jsx
│   │   ┣ 📂 layout
│   │   │   ┣ 📜 Layout.jsx
│   │   │   ┗ 📜 Layout.style.jsx
│   │   ┗ 📂 view
│   │       ┣ 📂 Cadastro
│   │       │   ┣ 📜 CriarConta.jsx
│   │       ┣ 📂 Feed
│   │       │   ┣ 📂 OrdenarPosts
│   │       │   │   ┣ 📜 OrdenarPosts.jsx
│   │       │   ┣ 📂 Posts
│   │       │   │   ┣ 📜 Posts.jsx
│   │       │   ┣ 📂 UsuarioHeader
│   │       │       ┣ 📜 UsuarioHeader.jsx
│   │       ┣ 📂 LandingPage
│   │       │   ┣ 📂 Ferramentas
│   │       │   │   ┣ 📜 Ferramentas.jsx
│   │       │   │   ┗ 📜 ferramentas.style.jsx
│   │       │   ┣ 📂 FiquePorDentro
│   │       │   │   ┣ 📜 FiquePorDentro.jsx
│   │       │   │   ┗ 📜 fique-por-dentro.style.jsx
│   │       │   ┣ 📂 PaginaInicial
│   │       │   │   ┣ 📜 PaginaInicial.jsx
│   │       │   │   ┗ 📜 pagina-inicial.style.jsx
│   │       │   ┣ 📂 PorqueBolha
│   │       │       ┣ 📜 PorqueBolha.jsx
│   │       │       ┗ 📜 porque-bolha.style.jsx
│   │       ┣ 📂 Login
│   │       │   ┣ 📜 PaginaLogin.jsx
│   │       │   ┗ 📜 pagina-login.style.jsx
│   │       ┗ 📂 RecuperarSenha
│   │           ┣ 📜 Recuperacao.jsx
│   ┣ 📂 pages
│   │   ┣ 📂 Cadastro
│   │   │   ┣ 📜 Cadastro.jsx
│   │   ┣ 📂 Feed
│   │   │   ┣ 📜 Feed.jsx
│   │   ┣ 📂 LandingPage
│   │   │   ┣ 📜 LandingPage.jsx
│   │   │   ┗ 📜 landing-page.style.jsx
│   │   ┣ 📂 LoginPage
│   │   │   ┣ 📜 LoginPage.jsx
│   │   │   ┗ 📜 login-page.style.jsx
│   │   ┗ 📂 RedefinirSenha
│   │       ┣ 📜 RedefinirSenha.jsx
│   ┣ 📂 services
│   │   ┣ 📜 postApi.js
│   │   ┗ 📜 usuarioApi.js
│   ┣ 📂 style
│   │   ┣ 📜 GlobalStyle.js
│   │   ┗ 📜 theme.js
│   ┗ 📂 utils
└ 📂 css
  ┗ 📜 style.css
```

## Contribuidores

| [<img src="https://media.licdn.com/dms/image/D4D03AQHZVl1b6y8P3w/profile-displayphoto-shrink_800_800/0/1692834551312?e=1700697600&v=beta&t=vxPlr4t3pQ5KC5a_NKrF-GSdfjIjV2dYqw_EC4u36u0" width="100" height="100" style="border-radius:50%;">](https://www.linkedin.com/in/iohancabral/) | [<img src="https://media.licdn.com/dms/image/D4D03AQHlIfcp35NIKA/profile-displayphoto-shrink_800_800/0/1695267265717?e=1700697600&v=beta&t=jKJJLxzgiEnkU6xq5aVSNf3NLB25wz2xtOfiNYcGsX4" width="100" height="100" style="border-radius:50%;">](https://www.linkedin.com/in/joaovictormotamachado/) |
|:---:|:---:|
| **Iohan Torres**<br>[GitHub](https://github.com/iohantc)<br>[LinkedIn](https://www.linkedin.com/in/iohancabral/) | **João Victor Machado**<br>[GitHub](https://github.com/Joa1zin)<br>[LinkedIn](https://www.linkedin.com/in/joaovictormotamachado/) |
| [<img src="https://media.licdn.com/dms/image/D4D03AQFbT2QD4LzKBw/profile-displayphoto-shrink_800_800/0/1693091706323?e=1700697600&v=beta&t=tUsIH1hI-plDzjgmtczDDmNfcQXThHFROMKjQ4yHcqc" width="100" height="100" style="border-radius:50%;">](https://www.linkedin.com/in/renato-miranda-185269258/) | [<img src="https://media.licdn.com/dms/image/D4D03AQH9XbcrzNdfCw/profile-displayphoto-shrink_800_800/0/1685712290502?e=1700697600&v=beta&t=ke3P0TBejht5cXNVBD9DLBZWqZ7nD17eloWjRV3ZYBA" width="100" height="100" style="border-radius:50%;">](https://www.linkedin.com/in/victormlmartins/) |
| **Renato Miranda**<br>[GitHub](https://github.com/Renato-Miranda)<br>[LinkedIn](https://www.linkedin.com/in/renato-miranda-185269258/) | **Victor Martins**<br>[GitHub](https://github.com/Vimlm)<br>[LinkedIn](https://www.linkedin.com/in/victormlmartins/) |

## Contribuição

Sinta-se à vontade para contribuir com o projeto. Qualquer feedback ou pull request será muito bem-vindo.

## Licença

Este projeto está sob a licença MIT.