import { Search } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { modalOpen } from '../../store/slices/modals'

function Header() {
  const dispatch = useDispatch()
  const { isAuth } = useSelector(state => state.user)
  const navigate = useNavigate()
  // const handleProfile = () => {
  //   if (isAuth) {
  //     navigate('/profile')
  //   }
  //   else {
  //     dispatch(modalOpen('signUp'))
  //   }
  // }


  const location = useLocation()
  const path = location.pathname.split('').slice(0, 11).join('')

  const category = [
    {
      name: "Asosiy",
      slug: "/"
    },
    {
      name: "Biz haqimizda",
      slug: "/about"
    },
    {
      name: "Mahsulotlar",
      slug: "/products"
    }
  ]
  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white shadow-lg">
      <div className='max-w-[1260px] w-full mx-auto'>

        <div className="flex items-center justify-between h-full py-4">
          <div className='flex items-center gap-10'>
            <div>
              <img className="w-[240px] h-[60px]" alt="Logo" src="/logo.svg" />
            </div>

            <div className="flex items-center gap-6">
              {
                category.map(({ name, slug }, i) => (
                  <Link key={i} className={`text-black text-base ${path === slug && 'font-semibold'}`} to={`${slug}`}>{name}</Link>
                ))
              }
              <div className="flex items-center">
                <span className="font-normal text-black text-base">
                  Uz
                </span>

              </div>
            </div>
          </div>


          <div className=" flex items-center gap-6">
            <form className='px-4 py-2 flex items-center justify-center gap-4  rounded focus-within:bg-[#EAEAEA]'>
              <input className='w-full h-full text-base outline-none' placeholder='Qidirish...' type="text" />
              <button type='button' className='cursor-pointer'>
                <Search size={22} />
              </button>
            </form>
            <div onClick={() => dispatch(modalOpen('logIn'))} className="font-bold text-black text-base cursor-pointer">
              Войти
            </div>
            <button onClick={() => dispatch(modalOpen('signUp'))} className="px-4 py-1.5 bg-[#2e3192] text-white rounded font-bold text-base cursor-pointer">
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header