import Link from 'next/link'
import Links from './LinksData.json'

export const Navbar = () => {
	return (
		<nav>
			<ul className="flex gap-1">
				{Links.map(items => {
					return (
						<li key={items.id} tabIndex={items.id}>
							<Link
								href={items.path}
								className="px-4 text-lg font-medium  tracking-tighter duration-300  text-rose-600 hover:text-zinc-600 "
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
