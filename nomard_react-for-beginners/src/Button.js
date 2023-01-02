import PropTypes from "prop-types"
import styled from "./Button.module.css"
function Button({text}) {
    return <button className={styled.btn}>{text}</button>
}

Button.prototype = {
    text: PropTypes.string.isRequired,
}

export default Button;