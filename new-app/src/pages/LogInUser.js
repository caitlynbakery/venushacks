import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false)


  const navigate = useNavigate()

  const onButtonClick = () => {
    // You'll update this function later...
    console.log(`Form submitted, Name: ${name}, Password: ${password}`);
    setSubmitted(true)
    fetch("http://localhost:8000/createnewuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                
                body: JSON.stringify({name: name, password: password})
            })
            .then((res) => res.json())
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
    <div style={{}}>
  <label className="input input-bordered flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
    <input type="text" onChange={(e) => setName(e.target.value)}  className="grow" placeholder="Username" />
  </label>
  <label className="input input-bordered flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
    <input type="password"  onChange={(e) => setPassword(e.target.value)} className="grow" placeholder="password" />
  </label>
  <div className="flex justify-end">
                        <h3 className="text-white text-lg"> </h3>
                        <button type="submit" onClick={onButtonClick} className="btn">Submit</button>
                    </div>
    </div>
    
  )
}

export default Login