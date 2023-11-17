import { Button, Link } from "@nextui-org/react"
import { FaRegBookmark } from "react-icons/fa6"

export default ({authorName, authorUrl, publishDate}) => {
    return (
        <div className="flex gap-1 flex-col items-start text-sm mb-4 md:text-lg md:mb-4">
            <p >By <Link href={authorUrl}>{authorName}</Link></p>
            <p>{publishDate}</p>
            <Button startContent={<FaRegBookmark/>} className="mt-3 px-4 rounded-full border-1 border-gray-500 hover:bg-gray-200 bg-white  px-2 py-1 h-auto w-initial">Save</Button>
        </div>
    )
}