export default function validateInfo(values){

    let errors ={}
    //Name

    if(!values.username.trim()){
        errors.username = "Proszę podać imię"
    }else if (!values.username.match(/^[A-Za-z]+$/)) {
        errors.username = "Podane imię jest nieprawidłowe!"
    }
    //Email
    if(!values.email){
        errors.email = "Proszę podać adres email!"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Podany email jest nieprawidłowy!"
    }

    //Message

    if(!values.message.trim()){
        errors.message = "Wiadomość nie może być pusta!"
    }else if (values.message.length < 120){
        errors.message ="Wiadomość musi mieć conahmiej 120 znaków!"
    }
    //Password
    if (!values.password) {
        errors.password = "Hasło jest wymagane"
    }else if (values.password.length < 6){
        errors.password = 'Hasło musi mieć 5 znaków lub więcej'
    }

    if(!values.password2) {
        errors.password2 = "Proszę podać hasło"
    } else if (values.password2 !== values.password){
        errors.password2 = "Hasła musza być takie same"
    }
    return errors;
}