# 🏴‍☠️ Sindbad's Treasure Vault API

A small Express + TypeScript API for managing **treasures** with JWT authentication.  
Built as a one-week backend assessment covering Islands I–V.

---

## 🚀 Setup

```bash
# 1. Install dependencies
npm install

# 2. Create your environment file
cp .env.example .env

# 3. Fill in your .env values
#    MONGO_URI  → your MongoDB Atlas connection string
#    JWT_SECRET → any long random string (e.g. "superSecretKey123!")

# 4. Start the dev server
npm run dev
```

The server will start at **http://localhost:3000**.  
Swagger docs are available at **http://localhost:3000/api-docs**.

---

## 📡 Endpoints

### Core (required)

| # | Method | Path | Auth? | Description |
|---|--------|------|-------|-------------|
| 1 | `GET` | `/health` | No | Returns `200 { status: "ok" }` |
| 2 | `POST` | `/auth/register` | No | Create a user (hash password) |
| 3 | `POST` | `/auth/login` | No | Check credentials, return JWT |
| 4 | `GET` | `/treasures` | No | List treasures, optional `?category=` filter |
| 5 | `POST` | `/treasures` | **Yes (JWT)** | Create a treasure (validated) |

### Bonus (optional)

| Method | Path | Auth? | Description |
|--------|------|-------|-------------|
| `GET` | `/treasures/:id` | No | Get one treasure by ID (404 if not found) |
| — | — | — | `requireRole("admin")` middleware: restrict `POST /treasures` to admins (403) |

---

## 📏 Rules

1. **Do not change file names or function signatures.** Implement the logic inside the existing stubs.
2. **Never commit `.env`.** It is already in `.gitignore`.
3. **Use proper HTTP status codes:** `200`, `201`, `400`, `401`, `403`, `404`, `500`.
4. **Document every endpoint in Swagger** using JSDoc comments in the route files.

---

## ✅ Definition of Done

- [ ] Server starts and connects to MongoDB
- [ ] `GET /health` works
- [ ] Register hashes the password (never stored as plain text)
- [ ] Login returns a JWT
- [ ] `GET /treasures` works with and without `?category=`
- [ ] `POST /treasures` is blocked without a token (401) and validated (400)
- [ ] Swagger UI opens at `/api-docs` and documents all core endpoints
- [ ] `.env` is not pushed to GitHub

---

## 📦 Submission

1. Push your completed project to a **GitHub repository**.
2. Share the repo link with your instructor.
3. Include a short **Postman or Swagger screenshot** of a successful `POST /treasures` request.

---

## 🛠 Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Dev | `npm run dev` | Start with hot-reload (nodemon + tsx) |
| Build | `npm run build` | Compile TypeScript to `dist/` |
| Start | `npm start` | Run the compiled JS from `dist/` |
