import React from 'react'

const Button = ({ size = "lg", theme = 'light', text = 'Add Name' }) => {

    return (
        <button className={`rounded-full 
        ${theme === 'light' ? "text-black bg-white" : 'text-white bg-black'}
        ${size == 'lg' ? "text-sm md:text-lg py-2 px-4 md:py-2 md:px-8" : "text-sm md:text-base py-1 px-2 md:px-4"}
        font-normal-font`}>
            {text}
        </button>
    )
}

export default Button