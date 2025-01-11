import React from "react";
import { Link } from "react-router-dom";

function SingleProduct() {
  return (
    <div className="p-4 flex">
        <Link className="bg-black text-white p-2 rounded-md absolute top-2 right-3" to={'/cart'}>Cart</Link>
      <div className="flex gap-4 px-10 py-10">
        <img
          className="w-[300px] shadow-2xl h-200px object-cover"
          src="https://img.freepik.com/free-vector/drink-ad-nature-watermelon-juice_52683-34242.jpg?uid=R179283473&ga=GA1.1.244016193.1733721289&semt=ais_hybrid"
          alt=""
        />
       <div className="flex flex-col">
       <h2 className="text-2xl font-semibold">Product Name</h2>
        <p className="my-2 text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quae
          incidunt asperiores cumque non saepe natus soluta architecto quam
          animi? Neque harum soluta quisquam placeat dolore, facilis earum.
          Explicabo, laudantium unde numquam cumque voluptate aperiam eius
          excepturi quasi quisquam ea, ducimus eveniet vero in voluptates
          accusantium Accusantium ex sint, molestias
          veritatis error et optio eveniet, blanditiis reprehenderit
          repudiandae, quaerat rerum odio laborum numquam quidem architecto.
          Quam, odit, dicta amet saepe eius aliquam tenetur consequatur aut ad
          vitae illo eligendi in
        </p>
        <div className="flex justify-between mt-4 text-lg">
        <p>$ 34 Price</p>
        <p>Category</p>
        </div>
       <div className="gap-2 flex">
       <button className="bg-black text-white p-2 rounded-md w-fit mt-4">Add to Cart</button>
       <button className="bg-red-600 text-white p-2 rounded-md w-fit mt-4"><Link to={"/"} >Go Back</Link></button>
       </div>
       </div>
      </div>
    </div>
  );
}

export default SingleProduct;
