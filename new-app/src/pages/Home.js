
import React, { useState, useEffect } from "react";

function Home() {
    const [message, setMessage] = useState("");
    useEffect(() => {
        fetch("http://localhost:8000/addnewproduct", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({name: "test", desc_text: "my_type", price: 22.3})
        })
          .then((res) => res.json())
          .then((data) => setMessage(data.message));
      }, []);
    return (
        <h1>Home Page</h1>

    );
}