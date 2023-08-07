import './App.css'
import { useState } from 'react'
import FormInput from './components/FormInput'

const App = () => {
    const [ values, setValues ] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: ""
    })

    const inputs =[
        {
            id: 1,
            name: "username",
            placeholder: "Write your Username",
            type: "text",
            label: "Username",
            errorMessage: "Username should be 3-16 characters and shouldn't have any special character",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true
        },
        {
            id: 2,
            name: "email",
            placeholder: "Write your Email",
            type: "email",
            label: "Email",
            errorMessage: "It should be a valid email",
            required: true
        },
        {
            id: 3,
            name: "birthday",
            placeholder: "Write your Birthday",
            type: "date",
            min: "2000-06-10",
            label: "Birthday",
        },
        {
            id: 4,
            name: "password",
            placeholder: "Write your Password",
            type: "password",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$`,
            errorMessage: "Passwords must have between 4 and 10 characters and include 1 letter, 1 number and 1 special character",
            required: true
        },
        {
            id: 5,
            name: "confirmPassword",
            placeholder: "Confirm your Password",
            type: "password",
            label: "Confirm Password",
            pattern: values.password, // to matches the users input
            errorMessage: "The Confirm Password do not match with the Password",
            required: true
        },
        // {
        //     id: 6,
        //     name: "age",
        //     placeholder: "Write your Age (You must have 18)",
        //     type: "number",
        //     label: "Age",
        //     min: 18,
        //     max: 150,
        //     errorMessage: "The Confirm Password do not match with the Password",
        //     required: false
        // },
        // {
        //     id: 7,
        //     name: "privacy",
        //     placeholder: "privacy",
        //     type: "checkbox",
        //     label: "Do you agree our terms?",
        //     errorMessage: "The Confirm Password do not match with the Password",
        // }
        
    ]

    const handleSubmit = ( e ) => {
        e.preventDefault()
    } 

    const onChange = ( e ) => {
        setValues( {...values, [e.target.name]: e.target.value} )
    }

    console.log(values)
    return (
        <div className="app">
          <form onSubmit={handleSubmit} >
              <h2>Register</h2>
              {
                inputs.map( input => (
                  <FormInput 
                    key={input.id} 
                    {...input} 
                    value={setValues[input.name]}
                    onChange={onChange} 
                  />
                ))
              }
              {/* <button type="reset">Reset</button> */}
              <button type="submit">Continue</button>
          </form>
        </div>
        )
}

export default App