'use client'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import DescriptionIcon from '@mui/icons-material/Description'
import Tooltip from '@mui/material/Tooltip'
import { Typewriter } from 'react-simple-typewriter'

export const Hero = () => {
	return (
		<div className="flex justify-center">
			<div className="flex flex-col">
				<h3 className="text-xl font-bold text-black translate-y-4">
					<Typewriter
						words={[
							'Olá me chamo Maykon 👋',
							'Sou um 👇',
							'Obrigado por sua atenção 😁',
						]}
						loop
						cursor
						cursorStyle="|"
						typeSpeed={50}
						deleteSpeed={10}
						delaySpeed={3000}
					/>
				</h3>
				<div className="flex ">
					<h1 className="font-extrabold text-[14.5rem] text-black leading-[0.9]">
						WEB
					</h1>
					<div className="flex items-end">
						<div className="cursor-pointer">
							<Tooltip title="GitHub">
								<GitHubIcon sx={{ fontSize: 70 }} />
							</Tooltip>
						</div>
						<div className="cursor-pointer">
							<Tooltip title="Linkedin">
								<LinkedInIcon sx={{ fontSize: 70 }} />
							</Tooltip>
						</div>
						<div className="cursor-pointer">
							<Tooltip title="Curriculo">
								<DescriptionIcon sx={{ fontSize: 70 }} />
							</Tooltip>
						</div>
					</div>
				</div>
				<h1 className="pb-2 pt-2 font-extrabold text-9xl text-slate-500">
					DEVELOPER
				</h1>
				<div className="flex self-end">
					<p className="text-sm text-slate-500 font-medium tracking-widest leading-normal  max-w-sm">
						Mais de 2 anos de experiencia em desenvolvimento web, atualmente com 34
						anos trabalhando em desenvolvimento front end.
					</p>
				</div>
			</div>
		</div>
	)
}
