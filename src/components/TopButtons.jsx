import React from 'react'

function TopButtons({setQuery}) {
    
    const cities =[
        {
            id: 1,
            title: "Los Angeles",
        },
        {
            id: 2,
            title: "Atlanta",
        },
        {
            id: 3,
            title: "New York",
        },
        {
            id: 4,
            title: "Miami",
        },
        {
            id: 5,
            title: "Chicago",
        },
    ]
  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city) =>(
            <button key={city.id} className='text-white text-lg font-medium' onClick={() => setQuery({q: city.title})} >
                {city.title}
            </button>
        ))}
    </div>
  )
}

export default TopButtons