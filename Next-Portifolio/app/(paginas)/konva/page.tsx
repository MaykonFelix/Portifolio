import dynamic from 'next/dynamic'

const MapKonva = dynamic(() => import('./Components/index'), {
	ssr: false,
})

const konva = () => {
	return (
		<div className="border -translate-y-[78px] overflow-hidden">
			<MapKonva />

			Testes
		</div>
	)
}

export default konva
