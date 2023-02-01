import React from 'react'
import { HiOutlineCake } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import './css/Card.css';
import { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import Footer from './Footer';
import Data from "../data.json";

function Card() {
    // const [data, setData] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");



    return (
        <>

            <nav class="navbar">
                <ul class="navbar-nav">
                    <li class="nama-logo">
                        <label class="logo"><HiOutlineCake style={{ color: "white", width: "30px", height: "30px" }} /></label>
                        <div class="navbar-brand">
                            <div class="tripple">
                                <b style={{ color: "white" }}>&nbsp;Tripple</b><b style={{ color: "yellow" }}>N </b>
                            </div>
                            <div class="bakery">
                                <b style={{ color: "white", fontFamily: 'Brush Script MT' }}>&nbsp; Bakery</b>
                            </div>
                        </div>
                    </li>
                    <li class="searchbox">
                        <label className="logo-search flex items-center py-5 mx-3" ><BiSearch className='w-5 h-5 text-black' /></label>
                        <input
                            style={{ color: "black" }}
                            class="seacrh"
                            onChange={(e) => setSearchTerm(e.target.value)}
                            type="text"
                            placeholder="Search " />
                    </li>
                </ul>
            </nav>

            <div className="container mx-auto px-12">
                <div class="body">
                    <div className="text-center text-4xl font-bold p-5">
                        <h3>Products</h3>
                    </div>

                    <div className='content-center'>
                        <select className='bg-pink-color1 rounded-md text-center p-2 text-pink-color2 font-bold ' name="select" id="select">
                            <option className="font-thin" value="">Category</option>
                            <option className="font-thin" value="Ready">Ready</option>
                            <option className="font-thin" value="Pre-Order">Pre-Order</option>
                            <option className="font-thin"value="Sold Out">Sold Out</option>
                        </select>
                    </div>



                    {
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {Data.filter((image) => {
                                return searchTerm.toLowerCase() === '' ? image : image.name.toLowerCase().includes(searchTerm)
                            }).map((image) => (
                                <ImageCard key={image.id} image={image} coba={image.image} />
                            ))}
                        </div>
                    }
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Card