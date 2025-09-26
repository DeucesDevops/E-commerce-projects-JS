import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">

            <Link href="/" className="flex items-center">
                <Image
                    src="/logo.png"
                    alt="Deuceshop"
                    width={36}
                    height={36}
                    className="w-6 h-6 md:h-9"
                />
                <p className="text-md font-medium tracking-wider ">Deuceshop</p>
            </Link>


            <div className="">right</div>
        </nav>
    )
}
export default Navbar
