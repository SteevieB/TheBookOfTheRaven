import * as React from "react"

const PostCard = ({ title, subTitle, children, content, content2 }) => {
  return (
    <>
      <div className="md:w-7/8 rounded-xl overflow-hidden shadow m-1 md:m-4 relative flex flex-col">
        <div className="truncate h-128 md:h-64 w-full mx-auto -mt-24 p-4 md:p-0 md:mt-2">
          {children}
          {/* <div class="animation-wrapper">
            <div class="particle particle-1"></div>
            <div class="particle particle-2"></div>
            <div class="particle particle-3"></div>
            <div class="particle particle-4"></div>
          </div> */}
        </div>
        <div className="px-4 md:px-6 md:py-2 h-full">
          <div className="p-4 font-bold text-xl text-highlight-red md:mb-1">
            {title}
          </div>

          <p className="p-1 leading-tight font-noto">{subTitle}</p>
          <hr className="bg-highlight-red h-1 my-4 border-solid border-1 border-gray-700" />
          <p className="px-1 mb-4 text-gray-500 text-justify font-noto">
            {content}
          </p>
          <hr className="bg-highlight-red h-1 -mb-4 border-solid border-1 border-gray-700" />
        </div>
      </div>
    </>
  )
}

export default PostCard
