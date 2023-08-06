export const Hero = () => {
	return (
		<div className="flex ">
			<div className="p-4 flex flex-col border">
				<h3 className="text-xl font-bold text-black">Ola sou Maykon</h3>
				<div className="flex ">
					<h1 className="font-extrabold text-8xl text-black leading-[0.9]">
						WEB
					</h1>
					<div className="flex items-end">
						<div className="border w-10 h-10 bg-black" />
						<div className="border w-10 h-10 bg-black" />
						<div className="border w-10 h-10 bg-black" />
					</div>
				</div>
				<h1 className="pb-2 font-extrabold text-8xl text-slate-500">
					DEVELOPER
				</h1>

				<p className="text-sm text-slate-500 font-medium tracking-normal leading-loose">
					Ola meu nome é <span className="text-rose-500 font-bold">Maykon</span>
					, sou um desenvolvedor web com mais de 2 anos de experiencia, mas
					sempre em busca de crescimento profissional na área de
					Desenvolvimento, de forma a contribui com o crescimento empresarial
					com medidas inovadoras e conhecimentos profissioanis, somar esforços
					junto com a empresa que estou atuando.
				</p>
			</div>
		</div>
	)
}
