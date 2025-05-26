## 🧬 SCM Strategy (Software Configuration Management)

**📁 Tool used:** Git (via GitHub)

### 🔀 Branching Strategy

| Branch         | Role                                                                 |
|----------------|----------------------------------------------------------------------|
| `main`         | Stable version, ready for production deployment                      |
| `dev`          | Continuous integration branch, merges all feature developments       |
| `feature/*`    | Branch for each specific feature (e.g., `feature/login`)             |
| `hotfix/*`     | Branch for urgent fixes created from `main`                          |

### 🌱 Git Workflow

1. Create a `feature/` branch from `dev`.
2. Develop locally with regular, clean commits.
3. Push to GitHub and open a **Pull Request** to `dev`.
4. Code must be **reviewed** by another team member before merging.
5. `dev` is merged into `main` for stable releases.

### 🛠️ Additional Practices

- **Git Commit Convention:** `type(scope): message`  
  *(e.g., `feat(auth): add JWT token validation`)*
- **Pull Request Template:** Includes description, test coverage, and API screenshots if needed.
- **CI/CD Automation:** GitHub Actions or Vercel/Supabase CI (optional for MVP).

---

## 🧪 QA Strategy (Quality Assurance)

### ✅ Planned Tests

| Test Type            | Description                                                              | Tools                              |
|----------------------|--------------------------------------------------------------------------|------------------------------------|
| **Unit Tests**       | Test backend functions (e.g., XP calculations, input validation)         | `Jest` (Node.js)                   |
| **Integration Tests**| Test Express API routes with database interactions                       | `Supertest`, `Jest`, `SQLite` (mock)|
| **Manual Testing**   | Key user flows tested manually using Postman                             | `Postman`, Swagger documentation   |
| **End-to-End (later)**| Simulate full user flows via browser-based or API client tests           | `Playwright` / `Cypress` (not MVP priority) |

### 🧵 Deployment Pipeline (CI/CD)

| Environment   | Description                                                     |
|---------------|-----------------------------------------------------------------|
| `Staging`     | Auto-deployment from `dev` for pre-production testing           |
| `Production`  | Manual (or tag-triggered) deployment from `main`                |

**Recommended Tools (depending on hosting):**

- **Render / Vercel** for API (Express) + front-end hosting (if SPA).
- **Supabase / Railway / Neon** for PostgreSQL database.
