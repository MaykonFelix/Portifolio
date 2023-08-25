import { Stage, Layer, Star } from 'react-konva'
import { useState } from 'react'

function generateShapes() {
	return [...Array(15)].map((_, i) => ({
		id: i.toString(),
		x: Math.random() * window.innerWidth,
		y: Math.random() * window.innerHeight,
		rotation: Math.random() * 180,
		isDragging: false,
	}))
}
const INITIAL_STATE = generateShapes()

const MapKonva = () => {
	const [stars, setStars] = useState(INITIAL_STATE)

	const handleDragStart = (e: any) => {
		const id = e.target.id()
		setStars(
			stars.map(star => {
				return {
					...star,
					isDragging: star.id === id,
				}
			}),
		)
	}
	const handleDragEnd = (e: any) => {
		setStars(
			stars.map(star => {
				return {
					...star,
					isDragging: false,
				}
			}),
		)
	}
	return (
		<Stage width={window.innerWidth} height={window.innerHeight}>
			<Layer>
				{stars.map(star => (
					<Star
						key={star.id}
						id={star.id}
						x={star.x}
						y={star.y}
						numPoints={5}
						innerRadius={20}
						outerRadius={40}
						fill="#5703e2"
						opacity={0.6}
						draggable
						rotation={star.rotation}
						shadowColor="black"
						shadowBlur={10}
						shadowOpacity={0.6}
						shadowOffsetX={star.isDragging ? 10 : 5}
						shadowOffsetY={star.isDragging ? 10 : 5}
						scaleX={star.isDragging ? 1.2 : 1}
						scaleY={star.isDragging ? 1.2 : 1}
						onDragStart={handleDragStart}
						onDragEnd={handleDragEnd}
					/>
				))}
			</Layer>
		</Stage>
	)
}

export default MapKonva
