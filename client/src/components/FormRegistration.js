import React from 'react'
import {Container, Form} from 'react-bootstrap'

const genInputReg = (
        nameLabel   = "",
        id          = "",
        inputType   = "",
        placeholder = "",
        discription = ""
    ) => {
    return (
<       div className="row g-3 align-items-center mt-0">
            <div className="col">
                <label htmlFor={id} className="col-form-label">{nameLabel}</label>
            </div>
            <div className="col">
                <input type={inputType} id={id} className="form-control" placeholder={placeholder}></input>
            </div>
            <div className="col">
                <span id="passwordHelpInline" className="form-text">
                {discription}
                </span>
            </div>
        </div>
    )
}

export const FormRegistration = () => {
    return (
        <Container className="pt-3 pb-3">
            <h4>Регистрация нового пользователя:</h4>  
            <Form>
                {genInputReg("Пароль:","regPassword","password","","8-20 символов (0..9, a..z, A..Z)")}
                {genInputReg("Повторить пароль:","regConfirmPassword","password","","8-20 символов (0..9, a..z, A..Z)")}
                {genInputReg("Email:","regeMail","eMail","example@example.ru")}
                <div className="g-3 align-items-center mt-3">
                    <div>Нажимая на кнопку "Зарегистрироваться" вы соглашаетесь с <a href="/#">правилами</a> проекта  </div>
                    <button type="button" className="btn btn-success mt-0">Зарегистрироваться</button>
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







