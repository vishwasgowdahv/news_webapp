import React from 'react'

export default function Navbar(props) {

    // Props
    const { setCate,setQuery,searchNews } = props;
    
    return (
      <div className='sticky top-[0px] z-[2] bg-black flex items-center justify-between py-[10px] px-[25px]'>
        <div className="flex shrink-0 items-center">
          <a href=""><img className='p-[5px] m-[0] w-[100px] h-[40px]' src="src\assets\News.jpg" alt="" /></a>
        </div>
  
        <div>
          <input
            placeholder="Search Category here"
            className="w-[100px] sm:w-[193px] m-[5px] p-[5px] rounded-lg border border-white text-white"
            type="text"
            name="search"
            id="search"
          />
          <button
            onClick={() => {
              console.log(document.getElementById("search").value);
              setQuery(document.getElementById("search").value);
              searchNews();
              document.getElementById("search").value='';
            }}
            className=" cursor-pointer m-[5px] p-[5px] rounded-lg border border-white text-white"
          >
            Search
          </button>
        </div>
      </div>
    );
}
