import React from 'react'

const _genInputReg = (
        nameLabel   = "",
        id          = "",
        inputType   = "",
        placeholder = "",
        discription = ""
    ) => {
    return (
<       div className="row g-3 align-items-center mt-0">
            <div className="col">
                <label for={id} className="col-form-label">{nameLabel}</label>
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

export const FormRegistration = (props) => {
    if (props.regEnable) {
        return (
            <form className="form-style mt-5">
                <h4>Регистрация нового пользователя:</h4>  

                {_genInputReg("Номер телефона:","regPhone","phone","+71234567890")}
                {_genInputReg("Логин:","regLogin","login","vasya666","3-20 символов (уникальное имя на портале, 0..9, a..z)")}
                {_genInputReg("Имя:","regName","name","Василий","2-20 символов (а..я, А..Я)")}
                {_genInputReg("Фамилия:","regSurname","surname","Алибабаевич","2-20 символов (а..я, А..Я)")}
                {_genInputReg("Пароль:","regPassword","password","","8-20 символов (0..9, a..z, A..Z)")}
                {_genInputReg("Повторить пароль:","regConfirmPassword","password","","8-20 символов (0..9, a..z, A..Z)")}

                <div class="g-3 align-items-center mt-3">
                    <label className="col-form-label">Я:</label>
                    <input type="radio" class="btn-check" name="gender" id="reg-gender-male"></input>
                        <label class="btn btn-outline-primary mx-2" for="reg-gender-male">Мужчина</label>

                    <input type="radio" class="btn-check" name="gender" id="reg-gender-female"></input>
                        <label class="btn btn-outline-danger mx-3" for="reg-gender-female">Женщина</label>
                </div> 

                <div class="g-3 align-items-center m-3">
                    <label className="col-form-label">Ищу:</label>
                    <input type="radio" class="btn-check" name="orientation" id="reg-orientation-male"></input>
                        <label class="btn btn-outline-primary mx-3" for="reg-orientation-male">Мужчин</label>

                    <input type="radio" class="btn-check" name="orientation" id="reg-orientation-female"></input>
                        <label class="btn btn-outline-danger mx-3" for="reg-orientation-female">Женщин</label>

                    <input type="radio" class="btn-check" name="orientation" id="reg-orientation-all"></input>
                        <label class="btn btn-outline-success mx-3" for="reg-orientation-all">Всех</label>
                </div>      

                <div class="g-3 align-items-center mt-3">
                    <button type="button" className="btn btn-success mt-0">Зарегистрироваться</button>
                </div>
            </form>
        );
    }
    return (
        <div>
            
        </div>    
    );
}