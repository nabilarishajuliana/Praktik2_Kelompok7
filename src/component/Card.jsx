import React from 'react'
import { HiOutlineCake } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import './css/Card.css';
import { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import Footer from './Footer';
// import data from "../data.json";

function Card() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1f2898db-ceb4-4565-a1eb-2d3beb8a509c/product.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230130T072405Z&X-Amz-Expires=86400&X-Amz-Signature=b33123e43a01a610a35f04c061929b26cc1e29d99ab38455a726445e348878ed&X-Amz-SignedHeaders=host&x-id=GetObject"
        )
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, [data]);

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
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            placeholder="Search " />
                    </li>
                </ul>
            </nav>

            <div class="body">
                <div class="text">
                    <h2>Product</h2>
                    <p>Choose Your Product</p>
                </div>


                {!isLoading && data.length === 0 && (
                    <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
                )}

                {isLoading ? (
                    <h1 className="text-4xl text-center mx-auto mt-24 h-60">Loading...</h1>
                ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {data.filter((image) => {
                            return search.toLowerCase() === '' ? image : image.name.toLowerCase().includes(search)
                        }).map((image) => (
                            <ImageCard key={image.id} image={image} coba={image.image} />
                        ))}
                    </div>
                )}
            </div>
            <Footer />

        </>
    )
}

export default Card