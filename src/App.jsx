import React, { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Categories from "./components/Categories.jsx";

function App() {
  // States
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [cate, setCate] = useState("general");
  const [query, setQuery] = useState();
  const [lastPage, setLastpage] = useState(14);
  const [progress, setProgress] = useState(0);
  const [categories, setCategories] = useState([
    "general",
    "technology",
    "business",
    "sports",
    "entertainment",
    "health",
    "science",
  ]);

  // Variables
  const pageSize = 9;
  let totalResults = 34;

  // ENV's
  const apikey = import.meta.env.VITE_API_KEY;
//********************  FUNCTIONS  **********************************************
  const fetchnews = async () => {
    setProgress(progress + 10);
    const apires = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}&page=${page}&category=${cate}&pageSize=${pageSize}`
    );
    setProgress(60);
    const jsonres = await apires.json();
    setPosts(jsonres.articles);
    setLastpage(Math.ceil(jsonres.totalResults / (pageSize - 1)));
    totalResults = jsonres.totalResults;
    setProgress(100);
  };

  const searchNews = async () => {
    const apires = await fetch(
      `https://newsapi.org/v2/top-headlines?apiKey=${apikey}&q=${query}`
    );
    const jsonres = await apires.json();
    setPage(1);
    setPosts(jsonres.articles);
    setLastpage(Math.ceil(jsonres.totalResults / (pageSize - 1)));
  };
  useEffect(() => {
    searchNews();
  }, [query]);
  useEffect(() => {
    fetchnews();
  }, [cate]);

  return (
    <>
      <Navbar setCate={setCate} setQuery={setQuery} searchNews={searchNews} />
      <Categories
        setQuery={setQuery}
        setPage={setPage}
        categories={categories}
        setCate={setCate}
      />
      <LoadingBar
        height={3}
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Hero
        apikey={apikey}
        totalResults={totalResults}
        lastPage={lastPage}
        page={page}
        setPage={setPage}
        cate={cate}
        posts={posts}
        loading={loading}
        fetchnews={fetchnews}
        pageSize={pageSize}
        setPosts={setPosts}
        setLastpage={setLastpage}
        query={query}
      />
    </>
  );
}

export default App;
