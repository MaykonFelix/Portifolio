import { Avatar } from '@mui/material'

import { Navbar } from '@/shared/components/index'

export const Header = () => {
  return (
    <header className=" z-10 sticky backdrop-blur top-0 shadow">
      <div className="max-w-7xl ml-auto mr-auto pl-7 pr-7 flex items-center mt-2">
        <Avatar
          alt="Maykon Felix"
          src="http://github.com/MaykonFelix.png"
          className="mr-2 my-2 w-12 h-12 border-2 border-slate-400 duration-100 hover:border-rose-700"
        />
        <Navbar />
      </div>
    </header>
  )
}
