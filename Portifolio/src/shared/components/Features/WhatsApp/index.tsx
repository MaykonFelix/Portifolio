export default function WhatsApp() {
  return (
    <>
      {/* <!-- Botão Whatss --> */}
      <button className="btn-whatsapp">
        {/* <a href="https://api.whatsapp.com/send?phone=+554391287882&text=Muito%2C%20Obrigado" target="_blank"> */}
        <a
          href="https://api.whatsapp.com/send/?phone=554391114539&text=Seja+bem-vindo,+Eu+Maykon+Agradeço+sua+atenção.&type=phone_number&app_absent=0"
          target="_blank"
        >
          <i className="fa fa-whatsapp"></i>
        </a>
      </button>
    </>
  );
}
