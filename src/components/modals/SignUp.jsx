import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Axios from '../../api'
// import { registerUrl } from '../../utils/urls'
import { X } from 'lucide-react'
import { modalClose } from '../../store/slices/modals'
import { setIsAuth, setUser } from '../../store/slices/user'

function SignUp() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const handleClose = () => {
    dispatch(modalClose('SignUp'))
  }

  const handleFinish = async (e) => {
    e.preventDefault()
    const { target } = e
    let data = {}

    for (let el of Object.keys(target).slice(0.3)) {
      let item = target[el]
      data[item.name] = item.value
    }

    setLoading(true)

    if (!!data.email && !!data.password && data.name) {
      try {
        Axios.post(registerUrl, data).then(res => {
          dispatch(setIsAuth(true))
          dispatch(setUser(res.data.data))
          setLoading(false)
          handleClose()
        }).catch(err => {
          setLoading(false)
          if (err?.response?.status === 401) {
            alert('Bunday user bor!!!')
          }
        });
      } catch (error) {
        setLoading(false)
        if (error?.response?.status === 401) {
          alert('Bunday user bor!!!')
        }
      }
    }
  }

  return (
    <div className={`w-screen h-screen fixed top-0 left-0 z-100 transition-all ease-in-out duration-200`}>
      <div className='w-full h-full relative flex items-center justify-center'>
        <div className='w-full h-full bg-black/50 absolute top-0 left-0'></div>

        <div className='rounded-xl p-10 bg-white relative z-10'>
          <div className='w-full flex justify-end absolute top-6 right-6 '>
            <button onClick={() => dispatch(modalClose('signUp'))} className='cursor-pointer'><X /></button>
          </div>
          <div className='flex gap-4 flex-col items-center'>
            <h1 className='text-2xl text-center font-semibold'>Ro’yxatdan o’tish</h1>

            <div className='flex flex-col gap-4'>
              <div className='flex gap-2 flex-col'>
                <label htmlFor="phone">Telefon raqam</label>
                <input className='w-full px-4 py-2.5 rounded-[10px] bg-[#eeeeee] outline-none' type="text" placeholder='+998 12 345 67 89' />
              </div>
              <div className='text-sm flex gap-2'>
                <input type="checkbox" name="" id="" />
                <span className=''>Foydalanish shartlariga rozilik bildiraman</span>
              </div>
            </div>
            <button className='w-full h-full mt-4 py-3 text-white bg-[#2E3192] rounded-[10px]'>Ro’yxatdan o’tish</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp