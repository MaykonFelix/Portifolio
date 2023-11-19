'use client'
import { Stage, Layer, Rect } from 'react-konva'

const MapKonva = () => {
	return (
		<Stage width={window.innerWidth} height={window.innerHeight}>
			<Layer>
				<Rect draggable x={200} y={200} fill="#000" width={50} height={50} />
			</Layer>
		</Stage>
	)
}

export default MapKonva
