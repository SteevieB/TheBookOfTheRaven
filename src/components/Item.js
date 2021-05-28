import * as React from "react"

const Item = ({ title, subTitle, stats, children, content, content2 }) => {
  return (
    <>
      <div className="w-11/12 md:w-full mx-auto p-2">
        <div className="rounded-xl overflow-hidden shadow flex flex-col">
          <div className="truncate h-32 md:h-32 w-1/2 mx-auto m-2">
            {children}
          </div>
          <hr className="bg-highlight-red h-1 w-5/6 mx-auto border-solid border-1 border-gray-700" />
          <div className="md:px-6 md:py-4 h-full">
            <div className="p-2 font-bold text-xl text-highlight-red">
              {title}
            </div>
            <p className="p-2">{subTitle}</p>
            <p className="px-2 pb-2">{stats}</p>
            <p className="px-1 text-gray-500 text-justify">{content}</p>
            <p className="px-1 pb-4 text-gray-500 text-justify">{content2}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item
