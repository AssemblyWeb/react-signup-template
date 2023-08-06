import { useState } from "react"
import "./formInput.css"

const FormInput = ({label, name, value, onChange, errorMessage, ...props }) => {
    const [focused, setFocused] = useState(false)
    const handleFocus = ( e ) => {
        setFocused(true)
    }
    
    return (
        <div className="formInput">
            <label for={name}>{label}</label>
            <input 
                id={name} 
                name={name} 
                onChange={onChange} 
                {...props} 
                onBlur={handleFocus} 
                focused={focused.toString()}
                onFocus={() => props.name === "confirmPassword" && setFocused(true)}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput