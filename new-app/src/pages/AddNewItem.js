import React, { useState } from "react";
const AddNewItem = () => {
    const [name, setName] = useState();
    const [description, setDescription] = useState('');
    const [file, setFile] = useState();

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`Form submitted, Name: ${name}, Description: ${description}, File: ${file}`);
    }
        

    return (
        <div className="flex flex-col w-full h-screen bg-gradient-to-r from-purple-100 to-purple-300">
            <div className="flex w-full justify-end h-1/6">
                <div className="flex flex-row h-14 gap-x-4 pr-7 pt-3">
                </div>
            </div>
            <div className="flex h-5/6 items-center justify-center w-full">
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-1/3">
                    <h1 className="text-white text-xl text-center">Add New Listing</h1>
                    <div className="flex justify-center">
                        <input type="text" placeholder="Name of Item" value={name}
                            onChange={(e) => setName(e.target.value)} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="flex justify-center">
                        <input type="text" placeholder="Description of Item" value={description} onChange={(e) => setDescription(e.target.value)} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-white text-lg">Add Image:</h3>
                        <input type="file" onChange={handleChange} className="text-white" />
                        {file && <img src={file} alt="Uploaded" className="mt-4 max-w-full h-auto" />}
                    </div>
                    <div className="flex justify-end">
                        <h3 className="text-white text-lg"> </h3>
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AddNewItem