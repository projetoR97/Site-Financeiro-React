import React from 'react'
import serviceImage from "../assets/service-img.png"
import line from "../assets/line.png"
import finance from "../assets/Finance.png"
import investment from "../assets/Investment.png"
import wealth from "../assets/Wealth.png"
import estate from "../assets/Estate.png"

const Service = () => {
    return (
        <div className='my-20'>
            <div className='max-w-7xl mx-auto grid p-6 md:p-0 md:grid-cols-2 gap-28 items-center'>
                 {/* image section */}
                 <div className='bg-[#E0F8F8] rounded-br-4xl rounded-tl-4xl'>
                    <img src={serviceImage} alt="" />
                </div>
                {/* text section */}
                <div className='space-y-7'>
                    <div className='flex gap-5 items-center'>
                        <h3 className='bg-[#e3eeee] text-[#007a17] font-bold px-3 py-1'>NOSSOS SERVIÇOS</h3>
                        <img src={line} alt="" />
                    </div>
                    <div className='space-y-7'>
                        <h1 className='md:text-5xl text-3xl font-bold'>Nossos serviços ajudam você a crescer investimentos e patrimônio</h1>
                        <p>Inicie uma jornada para descobrir um mundo de oportunidades financeiras e ampliar seus investimentos com nossos serviços abrangentes e especializados</p>
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='flex gap-3 items-center'>
                            <img src={finance} alt="" />
                            <h5 className='font-semibold'>Planejamento Financeiro</h5>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img src={investment} alt="" />
                            <h5 className='font-semibold'>Assessoria de Investimentos</h5>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img src={estate} alt="" />
                            <h5 className='font-semibold'>Planejamento Patrimonial</h5>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img src={wealth} alt="" />
                            <h5 className='font-semibold'>Gestão de Patrimônio</h5>
                        </div>
                    </div>
                    <button className='p-2 border-2 border-gray-400'>Explore Serviços</button>
                </div>
               
            </div>
        </div>
    )
}

export default Service
