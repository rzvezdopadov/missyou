import React, {useState, useEffect} from 'react'
import {Container, Form} from 'react-bootstrap'
import { useHttp } from '../hooks/http.hook'

export const FormRegistration = () => {
    
    const {loading, request, errors, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: '', confirmPassword: '', userName: ''
    })

    useEffect(() => {
        if (errors) {
            alert(errors)
        }
        clearError()
    },[errors])


    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/register','POST',{...form})
            alert(data.message)
        } catch (e) {}
    }

    return (
        <Container className="pt-3 pb-3">
            <h4>Регистрация нового пользователя:</h4>  
            <Form>
                <div className="row g-3 align-items-center mt-0">
                    <div className="col">
                        <label htmlFor="userName" className="col-form-label">Имя:</label>
                    </div>
                    <div className="col">
                        <input 
                            type="userName" 
                            id="userName"
                            name="userName"
                            className="form-control" 
                            placeholder=""
                            disabled={loading}
                            onChange={changeHandler}
                        ></input>
                    </div>
                    <div className="col">
                        <span id="userName" className="form-text">
                        </span>
                    </div>
                </div>

                <div className="row g-3 align-items-center mt-0">
                    <div className="col">
                        <label htmlFor="email" className="col-form-label">Email:</label>
                    </div>
                    <div className="col">
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            className="form-control" 
                            placeholder="example@example.com"
                            disabled={loading}
                            onChange={changeHandler}
                        ></input>
                    </div>
                    <div className="col">
                        <span id="passwordHelpInline" className="form-text">
                        </span>
                    </div>
                </div>

                <div className="row g-3 align-items-center mt-0">
                    <div className="col">
                        <label htmlFor="password" className="col-form-label">Пароль:</label>
                    </div>
                    <div className="col">
                        <input 
                            type="password" 
                            id="password"
                            name="password"  
                            className="form-control" 
                            placeholder="********"
                            maxLength="20"
                            disabled={loading}
                            onChange={changeHandler}
                        ></input>
                    </div>
                    <div className="col">
                        <span className="form-text">
                            8-20 символов (0..9, a..z, A..Z)
                        </span>
                    </div>
                </div>

                <div className="row g-3 align-items-center mt-0">
                    <div className="col">
                        <label htmlFor="confirmPassword" className="col-form-label">Повторить пароль:</label>
                    </div>
                    <div className="col">
                        <input 
                            type="password" 
                            id="confirmPassword"
                            name="confirmPassword" 
                            className="form-control" 
                            placeholder="********"
                            maxLength="20"
                            disabled={loading}
                            onChange={changeHandler}
                        ></input>
                    </div>
                    <div className="col">
                        <span className="form-text">
                            8-20 символов (0..9, a..z, A..Z)
                        </span>
                    </div>
                </div>

                <div className="g-3 align-items-center mt-3">
                    <div>Нажимая на кнопку "Зарегистрироваться" вы соглашаетесь с <a href="/#">правилами</a> проекта  </div>
                    <button 
                        type="button" 
                        className="btn btn-success mt-0"
                        onClick={registerHandler}
                        disabled={loading}
                    >Зарегистрироваться</button>
                </div>
            </Form>
        </Container>
        
    );
}













//             {genInputReg("Логин:","regLogin","login","Введите логин","3-20 символов (уникальное имя на портале, 0..9, a..z)")}
//             {genInputReg("Имя:","regName","name","Василий","2-20 символов (а..я, А..Я)")}
//             {genInputReg("Фамилия:","regSurname","surname","Алибабаевич","2-20 символов (а..я, А..Я)")}

// <div className="g-3 align-items-center mt-2">
// <label className="col-form-label">Я:</label>
// <input type="radio" className="btn-check" name="gender" id="reg-gender-male"></input>
//     <label className="btn btn-outline-primary m-1" htmlFor="reg-gender-male">Мужчина</label>

// <input type="radio" className="btn-check" name="gender" id="reg-gender-female"></input>
//     <label className="btn btn-outline-danger m-1" htmlFor="reg-gender-female">Женщина</label>
// </div> 

// <div className="g-3 align-items-center m-2">
// <label className="col-form-label">Ищу:</label>
// <input type="radio" className="btn-check m-1" name="orientation" id="reg-orientation-male"></input>
//     <label className="btn btn-outline-primary m-1" htmlFor="reg-orientation-male">Мужчин</label>

// <input type="radio" className="btn-check" name="orientation" id="reg-orientation-female"></input>
//     <label className="btn btn-outline-danger m-1" htmlFor="reg-orientation-female">Женщин</label>

// <input type="radio" className="btn-check" name="orientation" id="reg-orientation-all"></input>
//     <label className="btn btn-outline-success m-1" htmlFor="reg-orientation-all">Всех</label>
// </div>

// <div className="g-3 align-items-center m-2">
// <label className="col-form-label">Для:</label>

// <input type="radio" className="btn-check" name="appointment" id="reg-appointment-communication"></input>
//     <label className="btn btn-outline-success m-1" htmlFor="reg-appointment-communication">Общения</label>

// <input type="radio" className="btn-check" name="appointment" id="reg-appointment-relationship"></input>
//     <label className="btn btn-outline-primary m-1" htmlFor="reg-appointment-relationship">Отношений</label>

// <input type="radio" className="btn-check" name="appointment" id="reg-appointment-onenight"></input>
//     <label className="btn btn-outline-danger m-1" htmlFor="reg-appointment-onenight">ONS</label>
// </div>    







