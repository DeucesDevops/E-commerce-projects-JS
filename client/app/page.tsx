import React from 'react'
import Image from "next/image";
import ProductList from "@/app/components/ProductList";

const HomePaage = () => {
    return (
        <div className="">
            <div className="relative aspect-[3/1] mb-12">
                <Image src="/featured.png" alt="Featured Product" fill/>

            </div>
            <ProductList />
        </div>
    )
}
export default HomePaage
