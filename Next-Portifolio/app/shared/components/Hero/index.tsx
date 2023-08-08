'use client'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import DescriptionIcon from '@mui/icons-material/Description'
import Tooltip from '@mui/material/Tooltip'

export const Hero = () => {
	return (
		<div className="flex justify-center">
			<div className="p-4 flex flex-col ">
				<h3 className="text-xl font-bold text-black">Ola sou Maykon</h3>
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
				<p className="text-xs text-slate-500 font-medium tracking-normal leading-loose border max-w-md">
					Mais de 2 anos de experiencia em desenvolvimento, atualmente com 34
					anos trabalhando em desenvolvimento front end.
				</p>
			</div>
		</div>
	)
}
