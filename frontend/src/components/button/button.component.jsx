import './button.style.scss'



const BUTTON_TYPES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...inputOptions}) => {
  return(
      <button className={`button-container ${BUTTON_TYPES[buttonType]}`} {...inputOptions}>
          {children}
      </button>
  )
}


export default Button;