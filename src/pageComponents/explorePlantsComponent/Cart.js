import { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import SideCartProductCard from "./SideCartProductCard";

export default function Cart({ sideCartProductList, setOpenCart, openCart}) {

    return (
        <div class="w-1/5 self-end items-end cart " onClick={() => setOpenCart(!openCart)}>
            <div className="absolute rounded-xl w-4 h-4 text-xs text-center ml-[13%] mb-1  bg-lime-300" >{sideCartProductList.length}</div>
            <HiOutlineShoppingCart className="self-end ml-[50%] shadow-gray-400 shadow-lg rounded-md" size={"32px"} />
            
        </div>
    )
}