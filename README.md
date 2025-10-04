# DVT Tech Challenge

This challenge is part of the hiring process at DVT for frontend developer roles.
The goal is to produce this without investing any more time than necessary.
As such, we'd like to see your regular conventions when writing an application.

## Why are we asking you to do this?

At DVT, we try to set our standards high.
We would love for strong candidates to join our team and help us aim to be the best.
This challenge is to help us understand your proficiency over a number of facets of development, which we value.

Some of these are

- Good commit & branching conventions
- Handling of network requests
- Typescript
- Routing
- State management
- Framework (Angular, React, NextJS or Django) conventions
- Semantic HTML
- CSS and Styling
- General ability to produce a polished application, responsiveness is a lower priority, but appreciated

## What do you need to produce?

We're asking you to build a basic storefront using [Fake Store API](https://fakestoreapi.com/)
(alternatives such as [JSON Dummy](https://dummyjson.com/docs/products) are also accepted)

We would like for you to get all products and display them as cards on a page, with the ability to add items to a cart.

There is a _lot_ of room to go above the expected outcome,
and please feel free to tackle something relevant to your current level
or something you are good at (this would be optional)

_Some_ examples of this would be

- Using a global state manager in an efficient way
- Multiple routes
- Great visuals
- Authentication

## Some additional notes

- Please be considerate of what dependencies and build tools you are using
- If you opt to use any @ts-ignores or similar, please leave a comment with an explanation
- Feel free to leave comments/notes in your `README.md`

## AI TOOL USAGE

- AI tools are permitted, but please do not use to generate an entire project or implementation
- Acceptable use:
  - Project setup
  - Boilerplate code generation
  - Project scaffolding
  - Project configuration generation
  - Project documentation generation
  - Project testing generation
  - Project deployment generation
  - Project CI/CD generation
  - Code completion
  - Code formatting
- Where AI was used, the understanding and explanation of what has been created is expected

## Submission

- Please use this repo as your submission.
- Open a finalised pull request for review.
- Notify us (especially your recruiter) when you are ready to submit.

Best of luck and thank you for taking part in our assessment.

# 🛒 Project Setup & Start Guide

This guide will help you set up and run the project locally.

---

## 📦 Prerequisites

Make sure you have the following installed:

- **Node.js** (use the version defined in `.nvmrc`)
- **npm** (comes with Node.js)
- **nvm** (Node Version Manager) – for switching Node versions
- **OpenSSL** – for generating secure keys

---

## 🚀 Getting Started

### 1. Select Node Version

Use the correct Node version specified in the `.nvmrc` file:

```bash
nvm use
```

If you don’t have the version installed, run:

```bash
nvm install
```

---

### 2. Generate a Secret Key (for session encryption)

Generate a 32-byte base64 encoded key:

```bash
openssl rand -base64 32
```

Copy the generated key and add it to your `.env.local` file:

```env
SESSION_SECRET=your_generated_secret_key
```

---

### 3. Install Dependencies

Install all required packages:

```bash
npm install
```

---

### 4. Run the Development Server

Start the app in development mode:

```bash
npm run dev
```

---

### 5. Access the Application

Open your browser and visit:

```
http://localhost:3000
```

---

## 🔧 Additional Commands

- **Build for production:**
  ```bash
  npm run build
  npm start
  ```

---

## 📝 Notes

- Ensure your environment variables are set in `.env.local`.
- For production, you’ll need proper deployment configuration (e.g., Vercel, Docker, or a VPS).
