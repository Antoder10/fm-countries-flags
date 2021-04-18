import React from 'react'

const DetailsSection = ({children}) => {
  return (
    <div className="flex flex-col mb-12 sm:w-1/2 sm:mb-0">
      {children}
    </div>
  )
}

export default DetailsSection;
