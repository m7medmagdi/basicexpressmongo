
A simple Express.js + MongoDB project using Docker Compose. Includes Mongo Express as a web-based admin UI for MongoDB.

---

## 🚀 Features

- Node.js + Express server
- MongoDB database via Docker
- Mongo Express UI at `http://localhost:8085`
- Hot reload with Nodemon
- Mongoose ODM integration

---

## 🧱 Project Structure

\`\`\`
.
├── docker-compose.yml
├── app.js / index.js
├── package.json
└── README.md
\`\`\`

---

## 🐳 Docker Setup

### 📦 Start Containers

\`\`\`bash
docker-compose up -d
\`\`\`

- MongoDB: \`localhost:27017\`
- Mongo Express: [http://localhost:8085](http://localhost:8085)

Default MongoDB credentials:

- Username: \`admin\`
- Password: \`admin\`

### 🛑 Stop Containers

\`\`\`bash
docker-compose down
\`\`\`

---

## 💻 Run the App

> First, install dependencies:

\`\`\`bash
npm install
\`\`\`

> Then start the server with hot-reloading:

\`\`\`bash
npm run start
\`\`\`

The server starts with \`nodemon app.js\`. Make sure your \`app.js\` is the entry point.

---

## 🔗 Connect to MongoDB

In your app (e.g., \`app.js\`), connect like this:

\`\`\`js
mongoose.connect('mongodb://admin:admin@localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
\`\`\`

---

## 🧪 Testing (Optional)

No tests added yet. You can add your own and run:

\`\`\`bash
npm test
\`\`\`

---

## 📄 License

[ISC](https://opensource.org/licenses/ISC)

---

## ✍️ Author

Mohamed Magdy
EOF
