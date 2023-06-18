import "./style.css";

export const WhatsApp = () => {
  return (
    <>
      <button className="btn-whatsapp">
        <a
          href="https://api.whatsapp.com/send/?phone=554391114539&text=Seja+bem-vindo,+Eu+Maykon+Agradeço+sua+atenção.&type=phone_number&app_absent=0"
          target="_blank"
        >
          <i className="fa fa-whatsapp"></i>
        </a>
      </button>
    </>
  );
};
