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
                className="p-1 font-semibold tracking-tighter hover:text-rose-700"
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
