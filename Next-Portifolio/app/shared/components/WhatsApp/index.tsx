'use client'
import Fab from '@mui/material/Fab'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export const WhatsApp = () => {
	return (
		<button className="fixed z-[999] bottom-8 right-8 outline-none animate-bounce">
			<Fab
				href="https://api.whatsapp.com/send/?phone=554391114539&text=Seja+bem-vindo,+Eu+Maykon+Agradeço+sua+atenção.&type=phone_number&app_absent=0"
				target="_blank"
				color="success"
				size="small"
				className="transition duration-500 ease-in-out hover:scale-125"
			>
				<WhatsAppIcon />
			</Fab>
		</button>
	)
}
