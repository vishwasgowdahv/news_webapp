import React from "react";

export default function Categories(props) {

    // Props
  const { setQuery, setPage, setCate, categories } = props;

  return (
    <>
      <div className=" overflow-x-scroll sm:overflow-hidden flex mt-[30px] gap-[10px] justify-start sm:justify-center items-center">
        {categories.map((cat) => (
          <button
            onClick={() => {
              console.log("clicked");
              setPage(1);
              setCate(cat);
              setQuery();
            }}
            key={cat}
            className=" cursor-pointer m-[5px] px-[10px] py-[2px] border-solid border-[0.5px] rounded-2xl"
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>
    </>
  );
}
