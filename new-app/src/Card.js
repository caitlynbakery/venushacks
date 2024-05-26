
function Card({name, image, description, price}){
    return(
        <div className="card w-20 bg-base-40 shadow-xl">
        <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    )
// function Card({name, image, description, price}) {
//     return (
//         <div className="flex justify-end w-full h-auto p-2">
//             <div className="card w-96 bg-base-100 shadow-xl">
//                 <figure className="px-2 pt-2">
//                     <img src={image} alt={name} className="rounded-xl w-full" />
//                 </figure>
//                 <div className="card-body p-4">
//                     <h2 className="card-title text-lg">{name}</h2>
//                     <p className="text-sm">{description}</p>
//                     <p className="text-sm font-bold">{price}</p>
//                     <div className="card-actions justify-end">
//                         <button className="btn btn-primary btn-sm">Add to Cart</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
 }
export default Card
