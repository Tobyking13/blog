import "../styles/authmodal.css";

const AuthModal = ({ setOpenAuthModal }) => {

    // const handleClick = () => {
    //     setOpenAuthModal(false);
    // }

    console.log(setOpenAuthModal)
    return (
        <div className="auth-modal">
            <div onClick={handleClick}>ⓧ</div>
        </div>
    )
}

export default AuthModal;