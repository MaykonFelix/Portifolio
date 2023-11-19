import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Konva | Maykon',
	description: 'Portifolio Maykon',
}

interface KonvaLayoutProps {
	children: React.ReactNode
}

export default function KonvaLayout({ children }: KonvaLayoutProps) {
	return <section>{children}</section>
}
