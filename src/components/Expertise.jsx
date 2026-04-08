import React from 'react'
import line from "../assets/line.png"
import ExpertiseImage from "../assets/ExpertiseLogo.png"

const Expertise = () => {
  return (
    <div className='my-20'>
      <div className='max-w-7xl mx-auto grid p-6 md:p-0 md:grid-cols-2 gap-28 items-center'>
        {/* text section */}
        <div className='space-y-7'>
            <div className='flex gap-5 items-center'>
                <h3 className='bg-[#f2f6f6] text-[#0b8000] font-bold px-3 py-1'>OUR EXPERTISE</h3>
                <img src={line} alt="" />
            </div>
            <div className='space-y-7'>
                <h1 className='md:text-5xl text-3xl font-bold'>Transformando finanças <br /> com gestão estratégica <br /> de patrimônio</h1>
                <p>Guiando você em sua jornada de sucesso financeiro global com serviços de consultoria financeira personalizados. Alcance suas metas com expertise orientada por dados e proteja seu futuro financeiro no cenário em constante mudança.</p>
                <p>Estamos comprometidos em oferecer orientação especializada, estratégias comprovadas e uma abordagem personalizada para garantir prosperidade financeira.</p>
            </div>
            <button className='p-2 border-2 border-gray-400'>Explore Serviços</button>
        </div>
        {/* image section */}
        <div className='bg-[#E0F8F8] rounded-br-4xl rounded-tl-4xl'>
            <img src={ExpertiseImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Expertise
