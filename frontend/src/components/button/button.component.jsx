import './button.style.scss'



const BUTTON_TYPES = {
    google: 'google',
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