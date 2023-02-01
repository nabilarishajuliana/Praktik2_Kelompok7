import React from 'react'
import { HiOutlineCake } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import './css/Card.css';
import { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import Footer from './Footer';
import data from "../data.json";

function Card() {
    const [search, setSearch] = useState('');
    const [isLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [q, setQ] = useState('');
    const [searchParam] = useState(['name', 'description', 'category']);
    const [labelCategory] = useState([
        { value: 'All', label: 'All Product By Category' },
        { value: 'Ready', label: 'Ready' },
        { value: 'Sold Out', label: 'Sold Out' },
        { value: 'Pre-Order', label: 'Pre-Order' },
    ]);
    const [filterParam, setFilterParam] = useState('All');
    const [product, setProduct] = useState([]);

    function cari(data) {
        isLoading(true);
        return data.filter((item) => {
            if (data.category === filterParam) {
                return searchParam.some((newItem) => {
                    return item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1;
                });
            } else if (filterParam === 'All') {
                return searchParam.some((newItem) => {
                    return item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1;
                });
            }
            isLoading(false);
        });
    }

    useEffect(() => {
        console.log(filterParam);
        const searchTerm = search.toLowerCase();
        let filteredData;
        if (search === '' && filterParam === 'All') {
            setProduct(data);
        } else {
            if (search !== '' && filterParam === 'All') {
                filteredData = data.filter((value) => {
                    return value.name.toLowerCase().match(new RegExp(searchTerm, 'g'));
                });
            } else if (search !== '' && filterParam !== 'All') {
                filteredData = data.filter((value) => {
                    return (
                        value.name.toLowerCase().match(new RegExp(searchTerm, 'g')) &&
                        value.category === filterParam
                    );
                });
            } else if (search === '' && filterParam === 'All') {
                filteredData = data.filter((value) => {
                    return value.category === filterParam;
                });
            } else if (search === '' && filterParam !== 'All') {
                filteredData = data.filter((value) => {
                    return value.category === filterParam;
                });
            }
            setProduct(filteredData);
        }
    }, [filterParam, search]);

    useEffect(() => {
        setProduct(data);
    }, []);



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

            <div className="container mx-auto px-12">
                <div class="body">
                    <div className="text-center text-4xl font-bold p-5">
                        <h3>Products</h3>
                    </div>

                    <div className="justify-center flex">
                        <select
                            onChange={(e) => {
                                setFilterParam(e.target.value);
                            }}
                            className="custom-select px-4 py-3 rounded-md bg-pink-color1/70 text-pink-color2"
                            aria-label="Filter Product By Category"
                        >
                            {labelCategory.map((item) => {
                                return <option value={item.value}>{item.label}</option>;
                            })}
                        </select>
                        <span className="focus"></span>
                    </div>

                    <div className="text-center text-pink-color1 text-lg mb-8">
                        <p>{product.length} Product found</p>
                    </div>
                    {isLoading && <h1 className="text-5xl text-center mx-auto mt-32">Loading ....</h1>}
                    {!isLoading && data.length === 0 && (
                        <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
                    )}
                    {data.length !== 0 && (
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" onClick={() => setShowModal(true)}>
                            {product
                                .map((image) => (
                                    <ImageCard key={image.id} image={image} coba={image.image} />
                                ))}
                        </div>
                    )}
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Card
