
import './styles/global.css'
import image from "./img/background.jpg"

export function App() {

  return (
    <div className='w-screen h-screen  flex-col bg-zinc-900 items-center justify-center gap-4'>
      <div className="bg-fixed" style={{ backgroundImage: `url(${image})` }}></div>



      <p className='text-5xl text-white'>I'm a Web</p>
  
      <p className='text-5xl antialiased text-blue-400 hover:text-sky-900'>Developer</p>
      <div className="w-200 h-200 bg-zinc-500"></div>
      <svg className='animate-bounce w-20 h-20 fill-blue-500 hover:fill-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>

    </div>
  )
}