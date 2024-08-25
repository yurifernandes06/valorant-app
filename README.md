# Valorant App

Este é um aplicativo web desenvolvido com Next.js, React e TypeScript, que utiliza a API do Valorant para exibir informações sobre agentes, mapas, skins e muito mais.

## Tecnologias Utilizadas

- **Next.js**: Framework para React com renderização do lado do servidor e geração de sites estáticos.
- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **pnpm**: Gerenciador de pacotes para JavaScript.
- **API do Valorant**: Fornece dados sobre agentes, mapas, skins, etc.

## Configuração do Ambiente

### Pré-requisitos

Certifique-se de ter os seguintes requisitos instalados:

- [Node.js](https://nodejs.org/) (Instalado via `asdf`)
- [pnpm](https://pnpm.io/) (Instalado globalmente)

### Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/yurifernandes06/valorant-app.git
   cd valorant-app
Instale as dependências

bash
Copiar código
pnpm install
Configure as variáveis de ambiente

Crie um arquivo .env.local na raiz do projeto com as seguintes variáveis:

env
Copiar código
NEXT_PUBLIC_API_URL=https://dash.valorant-api.com/
Inicie o servidor de desenvolvimento

bash
Copiar código
pnpm dev
O servidor estará disponível em http://localhost:3000.

Funcionalidades
Home: Página inicial do aplicativo que mostra os personagens.
Agents: Mostra informações sobre os agentes do Valorant.
Maps: Exibe detalhes sobre os mapas disponíveis no jogo.
Skins: Mostra as skins das armas.
Testes
Para rodar os testes do projeto, use:

bash
Copiar código
pnpm test
Acessar a Aplicação
Home: http://localhost:3000
Agents: http://localhost:3000/agents
Maps: http://localhost:3000/maps
Skins: http://localhost:3000/skins
Contribuição
Se você deseja contribuir para este projeto, siga estas etapas:

Faça um Fork do Repositório

Clique no botão "Fork" no canto superior direito do repositório no GitHub para criar uma cópia do repositório em sua própria conta.

Clone o Repositório

bash
Copiar código
git clone https://github.com/sua-conta/valorant-app.git
Crie uma Branch

Crie uma nova branch para suas alterações:

bash
Copiar código
git checkout -b minha-nova-feature
Faça as Alterações

Faça suas alterações e commit suas mudanças:

bash
Copiar código
git add .
git commit -m "Descrição das alterações"
Envie um Pull Request

Envie suas alterações para o repositório original:

bash
Copiar código
git push origin minha-nova-feature
Depois, abra um Pull Request no GitHub.

Recursos Adicionais
Documentação da API do Valorant
Documentação do Next.js
Documentação do React
Licença
Este projeto é licenciado sob a MIT License.
