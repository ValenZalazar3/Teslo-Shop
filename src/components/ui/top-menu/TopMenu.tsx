'use client'
import { useUIStore } from "@/store"
import Link from "next/link"
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5'





export const TopMenu = () => {

    const openMenu = useUIStore(state => state.openSideMenu)
    return (
        <nav className="flex px-5 justify-between items-center w-full">

            <div>
                <Link href='/'>
                    <span className={`S{titleFont.className} antialiased font-bold `}>Teslo</span>
                    <span> | Shop</span>
                </Link>
            </div>
            <div className="hidden sm:block">
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href='/category/men'>Hombres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href='/category/women'>Mujeres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href='/category/kids'>Niños</Link>
            </div>

            <div className="flex items-center">
                <Link className='mx-2' href='/search'>
                    <IoSearchOutline className="size-5" />
                </Link>
                <Link className='mx-2' href='/cart'>

                    <div className="relative">
                        <span className="absolute text-xs rounded-full px-1 fonte-bold -top-2 -right-2 bg-blue-700 text-white">
                            3
                        </span>
                        <IoCartOutline className="size-5" />
                    </div>
                </Link>

                <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 " onClick={() => openMenu()}>
                    Menu
                </button>

            </div>


        </nav>
    )
}
