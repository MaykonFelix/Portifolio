import logo1 from "./pic/f_logo.png"

const Footer = () => {
    return (
        <>
            <footer>
                <div className='conatiner text-center top'>
                    <div className='img'>
                        <img src={logo1} alt='' />
                    </div>
                    <p>© 2023. All rights reserved by Equipe-Felix.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer