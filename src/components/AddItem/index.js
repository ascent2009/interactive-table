import React from 'react';
import './addItem.css';

const AddItem = (props) => {
    const { 
        onChange,
        headers,
        items,
        addNewItem,
        firstName,
        lastName,
        email,
        phone } = props;
    const newItemId = items.length;
    
    return (    
        <div className="formBlock">
            <form className="form">
                <div className="inputBlock">
                    <label className="label" htmlFor="id">{headers[0]}</label>
                    <input disabled type="text" name="id" className="inputAdd" value={newItemId}/>
                </div>
                <div className="inputBlock">
                    <label className="label" htmlFor="Имя">{headers[1]}</label>
                    <input className="inputAdd" type="text" id="Имя" onChange={onChange} name="firstName" />
                </div>

                <div className="inputBlock">
                    <label className="label" htmlFor="Фамилия">{headers[2]}</label>
                    <input className="inputAdd" type="text" id="Фамилия" onChange={onChange} name="lastName" />
                </div>

                <div className="inputBlock">
                    <label className="label" htmlFor="email">{headers[3]}</label>
                    <input className="inputAdd" type="text" id="email" onChange={onChange} name="email" />
                </div>

                <div className="inputBlock">
                    <label className="label" htmlFor="телефон">{headers[4]}</label>
                    <input className="inputAdd" type="text" id="телефон" onChange={onChange} name="phone" />
                </div>
            </form>

            {firstName && lastName && email && phone
                ? <button className="btnAdd" type="button"
                onClick={() => addNewItem()}
                >
                    Внести в таблицу
            </button>
                : null}
        </div>
    )
}

export default AddItem;