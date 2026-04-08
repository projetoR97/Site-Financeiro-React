import React from 'react'

const ResponsiveMenu = ({ showMenu }) => {
    return (
        <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-green-50 px-8 pb-6 pt-16 md:hidden rounded-r-xl shadow-md transition-all`}>
            <div>
                <h1 className='font-bold text-2xl text-center'>Prosperix</h1>
                <nav className='mt-12'>
                    <ul className='flex flex-col gap-9 items-center text-xl font-semibold text-gray-800'>
                        <li className='cursor-pointer'>Início</li>
                        <li className='cursor-pointer'>Serviços</li>
                        <li className='cursor-pointer'>Contato</li>
                        <li className='cursor-pointer'>Ajuda</li>
                        <button className='bg-[#04aa4c] px-4 py-1 text-white rounded-sm'>Entrar</button>
                    </ul>
                </nav>
            </div>
            <div>
                <h1>Feito com ❤️ por ROGERIO</h1>
            </div>
        </div>
    )
}

export default ResponsiveMenu
