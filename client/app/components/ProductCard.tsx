"use client"

import React from 'react'
import {ProductType} from "@/app/type";
import Link from "next/link";
import Image from "next/image";
import {ShoppingCart} from "lucide-react";

const ProductCard = ({product}:{product:ProductType}) => {



    return (
        <div className="shadow-lg rounded-lg overflow-hidden">
            <Link href={`/products/${product.id}`}>
                <div className="relative aspect-[2/3]">
                    <Image src={product.images[product.colors[0]]} alt={product.name} fill className="object-cover hover:scale-105 transition-all duration-300" />
                </div>
            </Link>

            {/**PRODUCT DETAILS**/}
            <div className=" flex flex-col gap-4 p-4">
                <h1 font-medium>{ product.name}</h1>
                <p className="text-sm text-gray-500">{product.shortDescription}</p>
                {/**PRODUCT TYPES**/}
                <div className="flex items-center gap-4 text-xs">
                    {/**SIZES**/}
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500">Size</span>
                        <select name="size" id="size" className="ring ring-gray-300 rounded-md px-2 py-1">
                            {product.sizes.map((size) => (
                                <option key={size} value={ size}>{size.toUpperCase()}</option>
                            ))}
                        </select>
                    </div>
                    {/*COLORS*/}
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500">Color</span>
                        <div className="flex items-center gap-2">
                            {product.colors.map((color) => (
                                <div className="" key={color}>
                                    <div
                                        className="w-[14px] h-[14px] rounded-full"
                                        style={{ backgroundColor: color }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/*PRICE AND ADD-TO-CART BUTTON*/}
                <div className="flex item-between">
                    <p className="font-medium">${product.price.toFixed(2)}</p>
                    <button className="flex items-center gap-2 ring ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300">
                        <ShoppingCart className="w-4" />
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard
