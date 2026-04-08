import React from 'react'
import facebook from "../assets/Frame 1.png"
import twitter from "../assets/Frame 2.png"
import instagram from "../assets/Frame 3.png"


const Footer = () => {
  return (
    <div className='bg-[#157a03] p-6 md:p-20'>
      <div className='max-w-7xl mx-auto text-white'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-0 md:mb-16 mb-10'>
          {/* column 1 */}
          <div className='space-y-7'>
            <h1 className='font-bold text-2xl'>Prosperix</h1>
            <p>Nossos consultores financeiros especialistas oferecem soluções para ajudar você a alcançar prosperidade financeira. Confie em nós para orientar você rumo a um futuro financeiro mais brilhante.</p>
            <div className='flex gap-7'>
              <div className='flex gap-3'>
                <img src={facebook} alt="" />
                <p className='hidden md:block'>Facebook</p>
              </div>
              <div className='flex gap-3'>
                <img src={twitter} alt="" />
                <p className='hidden md:block'>Twitter</p>
              </div>
              <div className='flex gap-3'>
                <img src={instagram} alt="" />
                <p className='hidden md:block'>Instagram</p>
              </div>
            </div>
          </div>
          {/* column 2 */}
          <div className='space-y-5 md:pl-28'>
            <h1 className='font-bold text-xl'>Nossos Serviços</h1>
            <p>Planejamento de Seguros</p>
            <p>Planejamento Patrimonial</p>
            <p>Otimização Tributária</p>
            <p>Gestão de Dívidas</p>
          </div>
          {/* column 3 */}
          <div className='space-y-5 md:pl-28'>
            <h1 className='font-bold text-xl'>Explore Mais</h1>
            <p>Sobre nós</p>
            <p>Blog</p>
            <p>Mapa do site</p>
            <p>Privacidade</p>
          </div>
          {/* column 4 */}
          <div className='space-y-5 md:pl-28'>
            <h1 className='font-bold text-xl'>Detalhes de Contato</h1>
            <p>contato@briofin.com</p>
            <p>+55 (31) 1234-5678</p>
          </div>
        </div>
        <hr />
        <div className='mt-5 flex justify-between text-center'>
          <p>Criado por ROGERIO NEVES</p>
          <div className='flex gap-4 md:gap-7'>
            <p>Tudo legal para ser consumido</p>
            <p>Direito livre</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
