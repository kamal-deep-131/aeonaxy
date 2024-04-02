import React from 'react'

const Footer = () => {
    return (
        <footer className='grid grid-cols-1 md:grid-cols-3 p-3'>
            <div className='col-span-1'>
                <a href="#" className='text-lg text-left md:text-2xl font-heading-font font-bold'>Medium</a>
            </div>
            <div className='col-span-1'>
                <p className='text-left md:text-center text-base'>Every Idea has a medium</p>
            </div>

            <ul className='flex items-center justify-start md:justify-end text-sm gap-3 col-span-1'>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Term</a>
                </li>
                <li>
                    <a href="#">Privacy</a>
                </li>
                <li>
                    <a href="#">Help</a>
                </li>
            </ul>


        </footer>
    )
}

export default Footer