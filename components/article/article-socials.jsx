import { Link, Button } from "@nextui-org/react"
import { FaEnvelope, FaFacebook, FaGift, FaLink, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export default () => {
    return (
        <div className="flex md:flex-col gap-2">
            <Link isIconOnly className="rounded-full bg-white w-[32px] h-[32px] border-1 border-gray-500 hover:bg-gray-200 text-black items-center justify-center"><FaTwitter /></Link>
            <Link isIconOnly className="rounded-full bg-white w-[32px] h-[32px] border-1 border-gray-500 hover:bg-gray-200 text-black items-center justify-center "><FaFacebook /></Link>
            <Link isIconOnly className="rounded-full bg-white w-[32px] h-[32px] border-1 border-gray-500 hover:bg-gray-200 text-black items-center justify-center "><FaLinkedinIn /></Link>
            <Link isIconOnly className="rounded-full bg-white w-[32px] h-[32px] border-1 border-gray-500 hover:bg-gray-200 text-black items-center justify-center "><FaEnvelope /></Link>
            <Link isIconOnly className="rounded-full bg-white w-[32px] h-[32px] border-1 border-gray-500 hover:bg-gray-200 text-black items-center justify-center "><FaLink /></Link>
            <Link isIconOnly className="rounded-full bg-white w-[32px] h-[32px] border-1 border-gray-500 hover:bg-gray-200 text-black items-center justify-center "><FaGift /></Link>
            
        </div>
    )
}