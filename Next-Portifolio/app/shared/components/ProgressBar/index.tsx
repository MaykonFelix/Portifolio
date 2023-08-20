interface ProgressBarProp {
	bgcolor?: string
	completed?: number
}

export const ProgressBar = ({
	bgcolor = 'bg-green-400',
	completed = 0,
}: ProgressBarProp) => {

	return (
		<div className="flex h-4 w-full bg-[#e0e0de] rounded-full m-1">
			<div className={`h-full flex text-right rounded-full w-[${completed}%] ${bgcolor}`}>
				<span className="px-4 text-xs font-bold text-white">{`${completed}%`}</span>
			</div>
		</div>
	)
}
