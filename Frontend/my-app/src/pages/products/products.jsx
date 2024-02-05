import React from "react";
import "./products.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import axios from "axios";

  //fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_ENDPOINT + "api/products/"
        );
        console.log(response.data);
        setProduct(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="collection-page">
        <section className="collections-background d-flex row w-100 m-0">
          <div className="p-0 cropped-container">
            <img
              className="collection-image-background w-100 h-auto"
            ></img>
          </div>
        </section>
        <section>
          <div className="mt-4 px-0 w-75 d-flex row my-0 mx-auto">
            <h1 className="our-scrunchies-title px-0">Products</h1>
          </div>
          <div className="navigation-options mt-4 mb-4 px-0 w-75 d-flex column my-0 mx-auto justify-content-between">
            <div className="d-flex column gap-3 justify-content-start align-items-center">
            <section className="collection-cards-section my-5">
          <div className="collections-cards mt-4 d-flex flex-row px-0 py-4 row-gap-5 w-75 my-0 mx-auto justify-content-start">
            {fetchProducts
                .map((item, index) => (
                  <div key={index} data={item} />
                ))}
          </div>
          </div>
          </section>
          </div>
          </>
          );};
