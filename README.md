# Página de Status de Serviços

Este projeto é uma aplicação completa de monitoramento de serviços, com front-end e back-end desenvolvidos para exibir o status dos serviços cadastrados e gerenciar suas informações.

---

## 🛠️ Tecnologias Utilizadas

### **Front-End**

- React
- Axios (para comunicação com o back-end)
- CSS (para estilização)

### **Back-End**

- Node.js
- Express
- Sequelize (ORM)
- SQLite (banco de dados leve)

---

## 📦 Estrutura do Projeto

```
status-page/
│
├── Front-End/            # Front-end da aplicação
│   ├── src/
│   │   ├── components/   # Componentes React
│   │   ├── services/     # Configuração da API
│   │   ├── App.js        # Entrada principal
│   │   ├── App.css       # Estilos globais
│   │   └── index.js      # Inicialização do React
│   └── package.json      # Dependências do front-end
│
├── Back-End/             # Back-end da aplicação
│   ├── models/           # Modelos do Sequelize
│   │   └── Service.js    # Modelo da tabela "Services"
│   ├── index.js          # Entrada principal do servidor
│   └── package.json      # Dependências do back-end
│
└── README.md             # Documentação do projeto
```

---

## 🚀 Funcionalidades

### **Front-End**

- Exibir a lista de serviços cadastrados.
- Estilização da tabela com CSS responsivo.

### **Back-End**

- **GET `/api/services`**: Listar todos os serviços.
- **POST `/api/services`**: Criar um novo serviço.
- **PUT `/api/services/:id`**: Atualizar um serviço existente.
- **DELETE `/api/services/:id`**: Excluir um serviço.

---

## 🖥️ Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- **Node.js** (v16 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

---

## 📦 Instalação

### Back-End

1. Navegue até o diretório do backend:
   ```bash
   cd Back-End
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm start
   ```

### Front-End

1. Navegue até o diretório do frontend:
   ```bash
   cd Front-End
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm start
   ```

---

## 🌐 Acessando a Aplicação

1. **Backend**:

   - URL base: `http://localhost:3001/api`
   - Exemplos de rotas:
     - `GET /services` - Lista os serviços.
     - `POST /services` - Adiciona um novo serviço.

2. **Frontend**:
   - Acesse o servidor React em:  
     `http://localhost:3000`

---
