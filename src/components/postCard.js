import * as React from "react"
import { Link } from "gatsby"

const PostCard = ({ title, subTitle, address, children, content, content2 }) => {

  return (
    <>
      <Link to={title}>
        <div className="md:w-7/8 rounded overflow-hidden shadow-lg m-1 md:m-4 relative flex flex-col">
          <div className="truncate h-32 md:h-40 w-full mx-auto">{children}</div>
          <div className="md:px-6 md:py-4 h-full">
            <div className="p-4 font-bold text-xl md:mb-2">{title}</div>
            <p className="p-2">{subTitle}</p>
            <p className="px-2 pb-2">{address}</p>
            <p className="px-1 text-gray-500 text-base">{content}</p>
            <p className="px-1 pb-4 text-gray-500 text-base">{content2}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default PostCard
