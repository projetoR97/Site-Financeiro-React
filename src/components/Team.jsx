import React from 'react'
import graduation from "../assets/graduation.png"
import shield from "../assets/shield.png"
import apps from "../assets/apps.png"

const Team = () => {
    return (
        <div className='my-20'>
            <div className='max-w-7xl mx-auto p-6 md:p-0'>
                <h1 className='text-3xl md:text-4xl font-bold'>Nossa equipe oferece serviços valiosos <br />
                    a qualquer hora em qualquer situação</h1>
                <div className='grid md:grid-cols-3 my-10 md:my-20 gap-10 md:gap-20'>
                    <div className='space-y-4 pr-10'>
                        <div className='h-20 w-20 flex items-center justify-center rounded-full bg-[#DAFAFC]'>
                            <img src={graduation} alt="" />
                        </div>
                        <h1 className='font-bold text-xl'>Orientação Especializada</h1>
                        <p>Conte com profissionais experientes para aconselhamento financeiro personalizado e planejamento estratégico alinhado às suas metas</p>
                        <button className='text-[#049120]'>Saiba Mais</button>
                    </div>
                    <div className='space-y-4 pr-10'>
                        <div className='h-20 w-20 flex items-center justify-center rounded-full bg-[#FDE4E4]'>
                            <img src={shield} alt="" />
                        </div>
                        <h1 className='font-bold text-xl'>Gestão de Riscos</h1>
                        <p>Gerenciamos e mitigamos proativamente riscos financeiros, garantindo a proteção dos ativos e estabilidade</p>
                        <button className='text-[#01ab12]'>Saiba Mais</button>
                    </div>
                    <div className='space-y-4 pr-10'>
                        <div className='h-20 w-20 flex items-center justify-center rounded-full bg-[#DAFCDF]'>
                            <img src={apps} alt="" />
                        </div>
                        <h1 className='font-bold text-xl'>Soluções Personalizadas</h1>
                        <p>Receba e aproveite soluções financeiras adaptadas aos seus desafios e aspirações</p>
                        <button className='text-[#008017]'>Saiba Mais</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
