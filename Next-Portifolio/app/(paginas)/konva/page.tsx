'use client'
import dynamic from 'next/dynamic'

const MapKonva = dynamic(() => import('./Components/index'), {
	ssr: false,
})



const konva = () => {
	return (
		<div className='border -translate-y-[80px]'>
			<MapKonva />
		</div>
	)
}

export default konva
