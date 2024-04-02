import React from 'react'
import Button from './Button'

const CallToAction = () => {
    return (
        <section className='bg-light-blue border-b-[1px] border-black relative'>
            <div className='flex flex-col items-center justify-center gap-3  p-5 md:pb-32 z-10'>
                <h4 className='text-2xl md:text-6xl text-center text-black font-heading-font'>Take your mind <br />
                    in new direction</h4>
                <Button theme='dark' size='lg' text="Get unlimted access" />
            </div>
            <div className='absolute hidden  bottom-0 z-0 md:flex items-center select-none justify-between w-full'>
                <p className='text-base font-normal-font'>
                    DISCOVER <br />
                    DISCOVER DISCOVER <br />
                    DISCOVER DISCOVER DISCOVER <br />
                    DISCOVER DISCOVER DISCOVER DISCOVER<br />
                    DISCOVER DISCOVER DISCOVER DISCOVER DISCOVER<br />

                </p>
                <p className='text-right'>
                    EXPLORE <br />
                    EXPLORE EXPLORE<br />
                    EXPLORE EXPLORE EXPLORE<br />
                    EXPLORE EXPLORE EXPLORE EXPLORE<br />
                    EXPLORE EXPLORE EXPLORE EXPLORE EXPLORE<br />

                </p>
            </div>
        </section>
    )
}

export default CallToAction