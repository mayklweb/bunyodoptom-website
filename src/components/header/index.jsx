import { Search } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className='max-w-[1260px] w-full mx-auto'>

        <div className="flex items-center justify-between h-full py-4">
          <div className='flex items-center gap-10'>
            <div>
              <img className="w-[240px] h-[60px]" alt="Logo" src="/logo.svg" />
            </div>

            <div className="flex items-center gap-6">
              <Link to={'/'} className="font-bold text-black text-base">
                Главная
              </Link>
              <Link to={'/about'} className="font-normal text-black text-base">
                О нас
              </Link>
              <Link to={'/products'} className="font-normal text-black text-base">
                Продкты
              </Link>
              <div className="flex items-center">
                <span className="font-normal text-black text-base">
                  Uz
                </span>
                <img
                  className="w-[15px] h-[15px] ml-[3px]"
                  alt="Language selector"
                  src="/frame-39.svg"
                />
              </div>
            </div>
          </div>


          <div className="flex items-center gap-6">
            <button className='cursor-pointer'>
              <Search size={22} />
            </button>
            <div className="font-bold text-black text-base cursor-pointer">
              Войти
            </div>
            <button className="px-4 py-1.5 bg-[#2e3192] text-white rounded font-bold text-base cursor-pointer">
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header