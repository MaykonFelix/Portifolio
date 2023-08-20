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
				<h3 className="text-xl font-bold translate-y-4">
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
					<h1 className="font-extrabold text-[14.5rem] leading-[0.9] ">WEB</h1>
					<div className="flex items-end">
						<a
							href="https://github.com/MaykonFelix"
							target="_blank"
							className="cursor-pointer duration-300 hover:text-rose-500"
						>
							<Tooltip title="GitHub">
								<GitHubIcon
									className="text-slate-700 duration-500 hover:text-slate-950 "
									sx={{ fontSize: 70 }}
								/>
							</Tooltip>
						</a>
						<a
							href="https://www.linkedin.com/in/maykonfelixwebdeveloper/"
							target="_blank"
							className="cursor-pointer"
						>
							<Tooltip title="Linkedin">
								<LinkedInIcon
									className="text-blue-500 hover:text-blue-800"
									sx={{ fontSize: 70 }}
								/>
							</Tooltip>
						</a>
						<div className="cursor-pointer">
							<Tooltip title="Curriculo">
								<DescriptionIcon sx={{ fontSize: 70 }} />
							</Tooltip>
						</div>
					</div>
				</div>
				<div className="flex">
					<h1 className="pb-2 pt-2 font-extrabold text-9xl bg-gradient-to-r from-cyan-500 to-indigo-700 bg-clip-text text-transparent !drop-shadow-[-100px_0px_80px_#0e7490]">
						DEVE
					</h1>
					<h1 className="pb-2 pt-2 font-extrabold text-9xl bg-gradient-to-r from-indigo-700 to-fuchsia-600 bg-clip-text text-transparent !drop-shadow-[100px_0px_80px_#c026d3]">
						LOPER
					</h1>
				</div>
				<div className="flex self-end">
					<p className="text-sm text-slate-500 font-medium tracking-widest leading-normal  max-w-sm">
						Mais de 2 anos de experiencia em desenvolvimento web, atualmente com
						34 anos trabalhando com desenvolvimento front end.
					</p>
				</div>
			</div>
		</div>
	)
}
