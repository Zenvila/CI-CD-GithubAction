# CI-CD-GithubAction
This repo  CI/CD testing  &amp; continous deployment learning.  

# 🚀 Simple Node.js CI/CD with GitHub Actions (Ubuntu + Docker)

This project demonstrates a basic CI/CD pipeline using GitHub Actions.  
It runs automated tests (CI) and builds a Docker image (CD) on every push to `main`.

---

## 📦 Clone the Repository

```bash
git clone https://github.com/Zenvila/CI-CD-GithubAction.git
cd CI-CD-GithubAction
```

---

## 🧪 Test Locally on Your Machine

### ✅ 1. Install Dependencies

> Make sure Node.js and Docker are installed.  
For Arch Linux:

```bash
sudo pacman -Syu nodejs npm docker
```

### ✅ 2. Run Tests Manually

```bash
npm install
npm test
```

Expected Output:
```
PASS  ./index.test.js
✓ says hello to Zen
```

### ✅ 3. Build and Run Docker Image

```bash
docker build -t ubuntu-test-app .
docker run --rm ubuntu-test-app
```

---

## 🌐 Remote Testing via GitHub Actions

This project uses GitHub Actions to:

- Run Jest tests (CI)
- Build and run a Docker image (CD)

### ✅ How to Trigger:

Just push to the `main` branch:

```bash
git add .
git commit -m "Update"
git push origin main
```

### 📊 View Results:

1. Go to your repo: [https://github.com/Zenvila/CI-CD-GithubAction](https://github.com/Zenvila/CI-CD-GithubAction)
2. Click the **Actions** tab
3. Click the latest workflow run
4. Check logs for:
   - `✔ Install dependencies`
   - `✔ Run tests`
   - `✔ Build Docker image`
   - `✔ Run container`

---

## 📁 Project Structure

```
.
├── Dockerfile
├── index.js
├── index.test.js
├── package.json
└── .github/
    └── workflows/
        └── ci-cd.yml
```
