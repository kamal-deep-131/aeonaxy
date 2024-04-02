import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Review = () => {

    return (
        <section className='flex flex-col items-center justify-center border-b-[1px] border-black'>
            <h3 className='text-2xl md:text-3xl font-heading-font text-black text-center p-4'>Why I am medium member...</h3>
            <div className='flex flex-col md:flex-row items-center justify-center gap-3 px-4'>
                <img src="/review.png" width={400} alt="review" />
                <div className='md:w-1/3 text-center md:text-left flex flex-col gap-3'>
                    <p className='text-base md:text-lg font-normal-font '>"I love medium's membership - It gives me access to the stories I love by the writes I love, and it allows me to help support those writers financially" </p>
                    <p className='text-base md:text-lg font-heading-font '>Kayt Molina</p>
                    <div className='w-full  text-black'>
                        <FontAwesomeIcon icon={faArrowRight} className='pl-4' size={30} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review