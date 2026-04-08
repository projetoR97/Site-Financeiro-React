import React, { useState } from 'react'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div className='py-3'>
      <div className='max-w-7xl mx-auto flex items-center px-6 md:px-0 justify-between'>
        {/* logo */}
        <h1 className='md:text-3xl text-2xl font-bold'>Prosperix</h1>
        {/* menu section  */}
        <nav className='hidden md:block'>
          <ul className='flex gap-9 items-center text-xl font-semibold text-gray-800'>
            <li className='cursor-pointer'>Início</li>
            <li className='cursor-pointer'>Serviços</li>
            <li className='cursor-pointer'>Contato</li>
            <li className='cursor-pointer'>Ajuda</li>
          </ul>
        </nav>
        {/* button section */}
        <div className='hidden md:flex gap-7 items-center'>
          <button className='text-[#068000]'>Entrar</button>
          <button className='bg-[#04970c] text-white px-4 py-2 rounded-sm'>Começar</button>
        </div>
        <div className='md:hidden text-4xl text-[#039a12]'>
          {
            showMenu ? <HiMenuAlt3 onClick={toggleMenu} /> : <HiMenuAlt1 onClick={toggleMenu} />
          }
        </div>
          
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
    </div>
  )
}

export default Navbar
