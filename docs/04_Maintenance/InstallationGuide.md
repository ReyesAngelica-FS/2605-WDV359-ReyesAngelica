# Installation Guide

**Project:** Ala Rey Studios  
**Developer:** Angelica Reyes  
**Course:** Project & Portfolio 6  
**Version:** 1.0  
**Status:** Final Release  
**Last Updated:** July 26, 2026

---

# Purpose

This guide provides instructions for installing, running, building, and deploying the Ala Rey Studios project. Following these steps will allow another developer to recreate the development environment and maintain the website.

---

# System Requirements

Before installing the project, ensure the following software is installed.

| Software | Recommended Version |
|-----------|---------------------|
| Node.js | Latest LTS |
| npm | Included with Node.js |
| Git | Latest Version |
| Visual Studio Code | Latest Version |

---

# Project Repository

Repository:

```text
https://github.com/ReyesAngelica-FS/2605-WDV359-ReyesAngelica
```

Live Website:

```text
https://reyesangelica-fs.github.io/2605-WDV359-ReyesAngelica/
```

---

# Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/ReyesAngelica-FS/2605-WDV359-ReyesAngelica.git
```

Move into the project directory.

```bash
cd 2605-WDV359-ReyesAngelica
```

---

# Install Dependencies

Install all required packages.

```bash
npm install
```

This command downloads all dependencies listed in the project's `package.json`.

---

# Start the Development Server

Run the local development server.

```bash
npm run dev
```

Open your browser and navigate to the local address displayed in the terminal (typically `http://localhost:5173`).

---

# Build the Project

Create an optimized production build.

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

---

# Preview the Production Build

Verify the production build before deployment.

```bash
npm run preview
```

---

# Deploy to GitHub Pages

Deploy the latest production build.

```bash
npm run deploy
```

After deployment, verify the live website using the GitHub Pages URL.

---

# Project Structure

```text
2605-WDV359-ReyesAngelica/
│
├── src/
├── public/
├── docs/
├── planning/
├── wireframes/
├── designs/
├── package.json
├── vite.config.js
└── README.md
```

---

# Updating Dependencies

To check for outdated packages:

```bash
npm outdated
```

To update project dependencies:

```bash
npm update
```

After updating, verify the project still builds successfully.

```bash
npm run build
```

---

# Troubleshooting

## Project Will Not Start

Verify that all dependencies are installed.

```bash
npm install
```

---

## Build Fails

Run:

```bash
npm run build
```

Review any reported errors and resolve them before deployment.

---

## Deployment Issues

If the website does not update:

1. Confirm the project builds successfully.
2. Commit and push the latest changes to GitHub.
3. Run:

```bash
npm run deploy
```

4. Refresh the GitHub Pages site after deployment.

---

## Missing Images

Verify that image files are stored in the correct directory and that file paths are correct.

Example:

```text
src/assets/images/
```

---

# Recommended Development Workflow

1. Pull the latest changes from the repository.
2. Create a feature branch for new work.
3. Develop and test locally.
4. Build the production version.
5. Commit changes with descriptive commit messages.
6. Merge into the main branch after testing.
7. Deploy to GitHub Pages.
8. Verify the live website.

---

# Related Documentation

Additional project documentation is available in the `docs/` directory:

- Project Plan
- Project Status Report
- Marketing Plan
- SEO Plan
- Analytics Plan
- Beta Testing Report
- Maintenance Plan
- Final Handoff Packet
- CHANGELOG

---

# Support

If future maintenance is required, begin by reviewing:

- `README.md`
- `MaintenancePlan.md`
- `FinalHandoffPacket.md`

These documents provide an overview of the project structure, maintenance schedule, and deployment process.

---

# Document History

| Version | Date | Description |
|---------|------|-------------|
| 1.0 | July 26, 2026 | Initial installation guide prepared for final project handoff. |