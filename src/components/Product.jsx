import React from "react";

function Product() {
  return (
    <div className="w-[200px]  p-2 hover:scale-105 shadow-2xl">
      <img
        className="w-[200px] h-[160px] object-cover"
        src="https://img.freepik.com/free-vector/drink-ad-nature-watermelon-juice_52683-34242.jpg?uid=R179283473&ga=GA1.1.244016193.1733721289&semt=ais_hybrid"
        alt=""
      />
      <h1 className="font-bold text-2xl">Product 1</h1>
      <div className="flex justify-between my-2">
        <p>Price</p>
        <p>Quantity</p>
      </div>
      <div className="flex justify-between">
        <p>category</p>
        <button className="bg-black text-white p-2 rounded-md">View Product</button>
      </div>
    </div>
  );
}

export default Product;
