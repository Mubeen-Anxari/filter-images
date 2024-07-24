"use client";
import Image from "next/image";
import { useState } from "react";
const images = [
  {
    id: 1,
    category: "Food",
    src: "/img7.jpeg",
  },
  {
    id: 2,
    category: "Food",
    src: "/img8.jpeg",
  },
  {
    id: 3,
    category: "Nature",
    src: "/img1.jpeg",
  },
  {
    id: 4,
    category: "Nature",
    src: "/img2.jpeg",
  },
  {
    id: 5,
    category: "Car",
    src: "/img3.jpeg",
  },
  {
    id: 6,
    category: "Car",
    src: "/IMG4.jpeg",
  },
  {
    id: 7,
    category: "technology",
    src: "/img5.jpeg",
  },
  {
    id: 8,
    category: "technology",
    src: "/img6.jpeg",
  },
];
export default function Home() {
  const [filter, setFilter] = useState("all");
  const filterItems =
    filter === "all" ? images : images.filter((img) => img.category === filter);
  return (
    <div className=" mx-auto container">
      <div className=" flex justify-center gap-4 p-4 mt-10">
        <button
          className={`px-4 rounded  py-2 ${
            filter === "all" ? "bg-blue-900" : "bg-gray-300"
          }`}
          onClick={() => {
            setFilter("all");
          }}
        >
          {" "}
          All
        </button>
        <button
          className={`px-4 rounded  py-2 ${
            filter === "Food" ? "bg-blue-900" : "bg-gray-300"
          }`}
          onClick={() => {
            setFilter("Food");
          }}
        >
          {" "}
          Food
        </button>
        <button
          className={`px-4 rounded py-2 ${
            filter === "Nature" ? "bg-blue-900" : "bg-gray-300"
          }`}
          onClick={() => {
            setFilter("Nature");
          }}
        >
          {" "}
          Nature
        </button>
        <button
          className={`px-4 rounded py-2 ${
            filter === "Car" ? "bg-blue-900" : "bg-gray-300"
          }`}
          onClick={() => {
            setFilter("Car");
          }}
        >
          {" "}
          Car
        </button>
        <button
          className={`px-4 rounded py-2 ${
            filter === "technology" ? "bg-blue-900" : "bg-gray-300"
          }`}
          onClick={() => {
            setFilter("technology");
          }}
        >
          {" "}
          Technology
        </button>
      </div>
     <div className=" grid grid-cols-1 lg:grid-cols-3 gap-3 border rounded ">
{filterItems.map((item,index)=>{
  return(
    <div key={index}>
     <Image src={item?.src} width={300} height={300} alt={item?.category}></Image>

    </div>
  )
})}
     </div>
    </div>
  );
}
