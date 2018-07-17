
import React from 'react';
const ErrorMessage =  <h3>Произошла ошибка на сервере. Не удалось сохранить ваши данные.</h3>;

const SuccessMessage = (props) => {
    let style = {
        fontSize: props.size,
        backgroundColor: props.style.backgroundColor
    }
    return <h3 className='fun' style={style}>Ваши данные успешно сохранены!</h3>;
    
    }

const Response = (props) => props.isSuccess ? <SuccessMessage style={props.style} size={props.size}/> : ErrorMessage
export default Response;