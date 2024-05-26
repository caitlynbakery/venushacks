import React, { useState } from "react";



const Home = () => {
  const [file, setFile] = useState();

  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }
  
  return (
      <div className="flex flex-col w-full h-screen bg-gradient-to-r from-purple-100 to-purple-300">
          <div className="flex h-5/6 items-center justify-center w-full">
              <form className="flex flex-col gap-y-4 w-1/3">
                  <h1 className="text-white text-2xl text-center">Zot N Thrift</h1>
                  <h1 className="text-white text-x4 text-center">Shop Peter's Dorm Essentials</h1>
                  <div className="search" style={{flexDirection: "row", display: "flex"}}>
                      <input type="text" className="search w-full px-4 py-2 text-gray-700 bg-white" placeholder="Search products"
                      />
                      <button type="search" className="px-2 py-2 text-white bg-purple-500 border border-puruple-100"
                      >
                      Search
                      </button>
                  </div>
                
                  <div class="card-body" style={{flexDirection: "row", display: "flex"}}>
                    <h2 class="card-title">Product</h2>
                    <p>Price</p>
                    <div class="card-actions justify-end">
                      <button class="px-2 py-2 text-white bg-purple-500 border border-puruple-100">Add to Cart</button>
                    </div>
                  </div>
              </form>
          </div>
      </div>
  );
}
export default Home
