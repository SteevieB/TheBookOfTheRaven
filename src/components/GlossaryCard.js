import * as React from "react"
const GlossaryCard = ({
  title,
  subTitle,
  content,
}) => {
  return (
        <div className="md:w-7/8 rounded overflow-hidden shadow-lg m-1 md:m-4 relative flex flex-col">
          <div className="md:px-6 md:py-4 h-full">
            <div className="p-4 font-bold text-xl md:mb-2">{title}</div>
            <p className="p-2">{subTitle}</p>
            <p className="px-1 text-gray-500 text-base">{content}</p>
          </div>
        </div>
  )
}

export default GlossaryCard
