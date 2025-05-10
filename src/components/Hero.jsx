import { useEffect, useState } from "react";
import Loading from "./Loading.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Hero(props) {
  
    // Props
  const {
    apikey,
    query,
    cate,
    pageSize,
    posts,
    loading,
    page,
    setPage,
    lastPage,
    setLastpage,
    totalResults,
    setPosts,
  } = props;


  // Functions
  const fetchMore = async () => {
    const apires = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}&page=${
        page + 1
      }&category=${cate}&pageSize=${pageSize}`
    );
    setPage((page) => page + 1);
    const jsonres = await apires.json();
    setPosts(posts.concat(jsonres.articles));
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="bg-white sm:py-6 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="m-auto text-center text-5xl font-bold mt-[20px]">
          TOP Headlines - {query?query:cate.toUpperCase()}
        </h1>

        <InfiniteScroll
          dataLength={posts.length} //This is important field to render the next data
          next={fetchMore}
          hasMore={!(page >= lastPage)}
          loader={<Loading />}
          endMessage={
            <p className="mt-[60px] text-green-600" style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-1 sm:pt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.length ? (
              posts.map((post, index) => (
                <article
                  key={index}
                  className=" border border-gray-400 rounded-xl p-[10px]  flex max-w-xl flex-col items-start justify-between"
                >
                  <img
                    className=" m-auto my-6 rounded-xl w-[340px] h-[200px]"
                    src={
                      post.urlToImage
                        ? post.urlToImage
                        : "https://miro.medium.com/v2/resize:fit:1400/1*VZqSvA1D94nr49qI4FgoRw.jpeg"
                    }
                    alt=""
                  />
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.publishedAt} className="text-gray-500">
                      {post.publishedAt
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("-")}
                    </time>
                    <a
                      href={post.url}
                      className="relative z-1 rounded-full px-3 py-1 font-medium text-white bg-gray-500 hover:bg-sky-900"
                    >
                      {post.source.name}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      <a href={post.url} target="_blank">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                      {post.content
                        ? post.content
                        : "Click here to Read the Post"}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      alt=""
                      src={
                        post.urlToImage
                          ? post.urlToImage
                          : "https://miro.medium.com/v2/resize:fit:1400/1*VZqSvA1D94nr49qI4FgoRw.jpeg"
                      }
                      className="size-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm/6">
                      <p className="font-semibold text-gray-900">
                        <a href={post.url}>
                          <span className="absolute inset-0" />
                          By - {post.author ? post.author : "Unknown"}
                        </a>
                      </p>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <h1 className="text-red-600 w-[90vw] text-[30px] text-center font-bold">
                NO NEWS RELATED TO {query} CATEGORY
              </h1>
            )}
          </div>
        </InfiniteScroll>

      </div>
    </div>
  );
}
