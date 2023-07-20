import Link from 'next/link'
import Links from './LinksData.json'

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex">
        {Links.map((items) => {
          return (
            <li key={items.id} tabIndex={items.id}>
              <Link
                href={items.path}
                className="px-4 border-l border-rose-700 font-medium tracking-tighter text-cyan-600 hover:text-rose-700 duration-300"
              >
                {items.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
