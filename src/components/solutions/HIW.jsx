import React from 'react'

const HIW = ({ points }) => {
  return (
    <div className="h-auto flex flex-col items-center gap-10 py-16 px-4">
      <div className="text-center mt-20">
        <h1 className="text-5xl md:text-7xl font-bold">How It Works</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {points.map((point, index) => (
          <div 
            key={index} 
            className="flex flex-col justify-start items-center text-center gap-4 px-2 py-6 h-auto"
          >
            <img 
              src={point.img} 
              alt={point.title} 
              className="h-[150px] w-[150px] object-cover rounded-md" 
            />
            <h2 className="text-3xl font-bold ">{point.title}</h2>
            <p className="text-md px-2">{point.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HIW
