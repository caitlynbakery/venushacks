import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Card from "../Card.js"

const Home = () => {
  const [file, setFile] = useState();
  const [search, setSearch] = useState();
  const [submitted, setSubmitted] = useState(false)
  const [response, setResponse] = useState()
  const navigate = useNavigate()
  const goToNewPage=()=>{
    navigate("/filterproduct")
  }

  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Form submitted, search: ${search}`); 
    setSubmitted(true)
    fetch(`http://localhost:8000/filterproduct?search=${search}`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                },

            })
            .then(async(res) => {
              let x = await res.json()
              setResponse(x)
              console.log(x)
            })
            //.then((data) => setMessage(data.message));
            .catch((error) => {
                console.error('Error:', error);
            })
            .finally(() => {
                // Reset the submitted state
                setSubmitted(false);
            });
  }

  return (
      <div className="flex flex-col w-full h-screen bg-gradient-to-r from-purple-100 to-purple-300">
          <div className="flex h-5/6 items-center justify-center w-full">
              <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-1/3">
                  <h1 className="text-white text-2xl text-center">Zot N Thrift</h1>
                  <h1 className="text-white text-x4 text-center">Shop Peter's Dorm Essentials</h1>
                  <div className="search" style={{flexDirection: "row", display: "flex"}}>
                      <input type="text" placeholder="Search products" value={search} onChange={(e) => setSearch(e.target.value)} className="search w-full px-4 py-2 text-gray-700 bg-white"/>
                      <button type="submit" className="btn px-2 py-2 text-white bg-purple-500 border border-puruple-100">Submit</button>
                  </div>
                  <div class="card-body" style={{flexDirection: "row", display: "flex"}}>
                    <div class="card-actions justify-end">
                    </div>
                  </div>
              </form>
          </div>
          <div className="flex justify-center flex-wrap gap-6 p-4"> {
                response && response.map(product => (
                  <Card
                    name={product.name}
                    desc={product.desc}
                    price={product.price}
                    image={product.image}
                  />
                  //<div key={product.id}> {product.name} {product.desc_text} {product.price} {product.image}
                  //</div>
                ))
                }

              </div>
      </div>
  );
}
export default Home
