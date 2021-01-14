import React from 'react';
import './button.css';

const Button = (props) => {
    return (
        <div className="buttonBlock">
            <button className="button" type="button" onClick={() => props.onClick()}>
            + Добавить сведения
            </button>
        </div>
    )
}

export default Button;


