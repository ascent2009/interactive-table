import React from 'react';
import './displayItem.css';

const DisplayItem = ({item}) => {
    return(
    <div className="itemBlock">
        <fieldset className="userBlock">
            <legend>Выбран пользователь с <span className="text ">ID {`${item.id}`}</span>:</legend>
            <div className="wrapper">
                <label className="labelItem">имя:</label>
                <p className="text">{`${item.firstName} ${item.lastName}`}</p>
            </div>
            <div className="wrapper">
                <label className="labelItem">email:</label>
                <p className="text">{`${item.email}`}</p>
            </div>
            <div className="wrapper">
                <label className="labelItem">телефон:</label>
                <p className="text">{`${item.phone}`}</p>
            </div>
            <div className="wrapper">
                <label className="labelItem">адрес:</label>
                <p className="text">{item.address ? `${item.address.streetAddress}, ${item.address.city}, ${item.address.state}, ${item.address.zip}` : 'No address provided'}</p>
            </div>
            <div className="wrapper">
                <label className="labelItem">краткое описание:</label>
                <p className="text">{item.address ? `${item.description}` : 'No description available'}</p>
            </div>
        </fieldset>
    </div>
    );
}

export default DisplayItem;