<div align="center">
  <img src="public/news.svg" alt="Logo" width="80" height="80">
  <h1 align="center">Top Headlines News App</h1>

  <p align="center">
    A fast, modern, and responsive news application built with React and Vite. Stay updated with the latest headlines across various categories like Technology, Business, Sports, and more.
    <br />
    <br />
    <a href="https://news.vishwasgowda.com"><strong>View Live Demo »</strong></a>
    <br />
    <br />
  </p>

  > **Note on API Limits:** The free tier of NewsAPI has a strict daily request limit. If you visit the live demo and no news is loading, the API limit has likely been reached for the day. In that case, please check out the demo video below!

  <p align="center">
    <strong><a href="https://github.com/user-attachments/assets/7d32c1ce-b535-43c5-a492-ecde75792afd">📺 Watch the Demo Video</a></strong>
  </p>
</div>

<div align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite"></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"></a>
</div>

---

## ✨ Features

- 📰 **Latest Headlines**: Browse the most recent top headlines from reliable sources.
- 🗂️ **Categorized News**: Easily filter news by categories like General, Technology, Business, Sports, Entertainment, Health, and Science.
- 🔍 **Search Functionality**: Quickly search for specific news topics or keywords.
- 📱 **Fully Responsive**: A beautifully crafted UI using Tailwind CSS that looks great on desktop, tablet, and mobile devices.
- ♾️ **Infinite Scrolling**: Seamlessly load more articles as you scroll down the page without needing pagination buttons.
- ⚡ **Lightning Fast**: Built with Vite and React 19 for instantaneous load times and smooth rendering.
- 🔒 **Secure API Handling**: Utilizes Vercel Serverless Functions to proxy API requests, ensuring the NewsAPI key remains completely hidden from the browser.

## 🛠️ Tech Stack

### Frontend Core
- **[React 19](https://react.dev/)**: The library for web and native user interfaces.
- **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling for fast development.

### Styling & UI
- **[Tailwind CSS v4](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **[@headlessui/react](https://headlessui.com/)**: Completely unstyled, fully accessible UI components.
- **[@heroicons/react](https://heroicons.com/)**: Beautiful hand-crafted SVG icons.

### Components & Utilities
- **[react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component)**: Handles the infinite scrolling functionality for news articles.
- **[react-top-loading-bar](https://www.npmjs.com/package/react-top-loading-bar)**: Provides a visual progress bar during API fetches.
- **[react-router-dom](https://reactrouter.com/)**: Declarative routing for React web applications.

### Backend & Deployment
- **[Vercel Serverless Functions](https://vercel.com/docs/functions)**: Node.js serverless endpoints (`/api/news` and `/api/search`) to bypass NewsAPI production CORS limitations and secure the API key.
- **[NewsAPI](https://newsapi.org/)**: The worldwide news API providing the data.

## 🚀 Running Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- A free API key from [NewsAPI.org](https://newsapi.org/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vishwasgowdahv/news_webapp.git
   cd news_webapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root of the project and add your NewsAPI key:
   ```env
   NEWSAPI_KEY='your_api_key_here'
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   *Note: The Vite config is set up to automatically proxy `/api/news` requests to NewsAPI during local development using the key from your `.env` file.*

5. **Open in browser**
   Navigate to `http://localhost:5173` in your browser.

## ☁️ Deployment

This project is configured to be easily deployed on [Vercel](https://vercel.com).

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. In the Vercel project settings, add the `NEWSAPI_KEY` environment variable.
4. Deploy! Vercel will automatically use the `vercel.json` and the serverless functions in the `api/` folder.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<div align="center">
  Made with ❤️ by Vishwas Gowda
</div>
