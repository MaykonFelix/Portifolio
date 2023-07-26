'use client'
import Fab from '@mui/material/Fab'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import './style.css'

export const WhatsApp = () => {
  return (
    <button className="btn-whatsapp">
      <Fab
        href="https://api.whatsapp.com/send/?phone=554391114539&text=Seja+bem-vindo,+Eu+Maykon+Agradeço+sua+atenção.&type=phone_number&app_absent=0"
        target="_blank"
        color="success"
        aria-label="add"
      >
        <WhatsAppIcon />
      </Fab>
    </button>
  )
}
