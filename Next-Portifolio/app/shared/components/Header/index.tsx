import { Avatar, Tooltip } from '@mui/material'
import { Navbar } from '@/shared/components/index'

export const Header = () => {
  return (
    <header className="z-10 sticky backdrop-blur top-0 shadow">
      <div className="max-w-7xl  ml-auto mr-auto pl-7 pr-7 flex items-center mt-2">
        <Tooltip title="Maykon" arrow>
          <Avatar
            alt="Maykon Felix"
            src="http://github.com/MaykonFelix.png"
            className="mr-2 my-2 w-11 h-11 duration-300 shadow shadow-cyan-500 hover:scale-110 hover:drop-shadow-lg"
          />
        </Tooltip>

        <Navbar />
      </div>
    </header>
  )
}
