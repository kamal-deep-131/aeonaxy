import React from 'react'

const Secondaryhero = () => {
    return (
        <section className='bg-myBlue'>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='p-3 md:m-10 flex flex-col gap-3'>
                    <h2 className='text-2xl md:text-3xl font-heading-font text-white text-center md:text-left'>Get Unlimted access to every <br className='hidden md:block' /> story</h2>
                    <img className='w-full' src="/m-left.jpg" alt="" width={300} />
                    <p className='text-base font-thin text-white text-center md:text-left'>Read any article in our entire library across all of your devices - with no paywalls, story limits or ads</p>
                </div>
                <div className='hidden md:block w-[1px] h-80 bg-white'></div>
                <div className='p-3 m-10 flex flex-col gap-6 '>
                    <h2 className='text-2xl md:text-3xl font-heading-font text-white text-center md:text-left'>Support the voice you want to hear more from</h2>
                    <img
                        className='w-full'
                        src="/m-right.jpg" alt=""
                        width={300} />
                    <p className='text-base font-thin text-white
                     text-center md:text-left'>A portion of your membership will directely support the writers and thinkers you read the most.</p>
                </div>
            </div>
        </section>
    )
}

export default Secondaryhero