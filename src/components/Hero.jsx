import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <section className='bg-myBlue  border-b-[1px] border-white'>
            <div className='flex flex-col items-center justify-center p-4 md:p-24 gap-4'>
                <h1 className='text-4xl md:text-6xl text-center text-white font-heading-font'>Fuel great thinking</h1>
                <p className='text-base font-normal-font text-white w-3/4 md:w-2/5 text-center font-normal'>Become a medium member to enjoy unlimted accese and directely support the writer you read most</p>
                <Button text='Get unlimted access' theme='light' size='lg' />
            </div>
        </section>
    )
}

export default Hero