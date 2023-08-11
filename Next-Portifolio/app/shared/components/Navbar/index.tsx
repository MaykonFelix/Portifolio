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
								className="px-4 font-medium shadow tracking-tighter duration-500 border-rose-600 text-rose-600 hover:text-rose-800 hover:bg-red-200 rounded-full"
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
