import SchoolIcon from '@mui/icons-material/School'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import WorkIcon from '@mui/icons-material/Work'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'

import Zoom from '@mui/material/Zoom'
import Tooltip from '@mui/material/Tooltip'

export const MenuItems = () => {
	return (
		<section className="flex flex-col justify-center items-center fixed z-10 top-1/3 right-6">
			<ul>
				<li className="text-center m-2">
					<Tooltip
						title="Conhecimentos"
						placement="left"
						TransitionComponent={Zoom}
						arrow
					>
						<a href="#features">
							<SchoolIcon color="primary" />
						</a>
					</Tooltip>
				</li>
				<li className="text-center m-2">
					<Tooltip
						title="Portfólio"
						placement="left"
						TransitionComponent={Zoom}
						arrow
					>
						<a href="#portfolio">
							<AutoStoriesIcon color="primary" />
						</a>
					</Tooltip>
				</li>
				<li className="text-center m-2">
					<Tooltip
						title="Resumo"
						placement="left"
						TransitionComponent={Zoom}
						arrow
					>
						<a href="#resume">
							<WorkIcon color="primary" />
						</a>
					</Tooltip>
				</li>
				<li className="text-center m-2">
					<Tooltip
						title="Subir"
						placement="left"
						TransitionComponent={Zoom}
						arrow
					>
						<a href="#" target="_top">
							<ArrowCircleUpIcon color="primary" />
						</a>
					</Tooltip>
				</li>
				<li className="text-center m-2">
					<Tooltip
						title="Descer"
						placement="left"
						TransitionComponent={Zoom}
						arrow
					>
						<a href="#" target="_top">
							<ArrowCircleDownIcon color="primary" />
						</a>
					</Tooltip>
				</li>
			</ul>
		</section>
	)
}
