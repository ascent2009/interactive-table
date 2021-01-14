import React from 'react';
import './items.css';
import {searchingFor} from '../../App';

const Items = (props) => {
    return(
        <table className="table">
          <thead className="tableHeader">
              <tr>
                {props.headers.map((header, num) =>
                  <th key={num}
                    onClick={() => props.sortBy('id', 'firstName', 'lastName', 'email', 'phone')}>
                        {header}
                        {props.sortDirection.id === 'asc' && props.sortIndicator
                        ? (<div className="arrow" title="сортировать по возрастанию/sort in ascending order">▼</div>)
                        : (<div className="arrow" title="сортировать по убыванию/sort in descending order">▲</div>)}
                  </th>)}
              </tr>
          </thead>
          <tbody className="tableCells">
            {props.items.filter(searchingFor(props.search)).map((item, num) => (          
                <tr
                  key={num}
                  onClick={() => {return (props.displaySelectedItem(item), console.log(item))}}
                >
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
              )
            )}
          </tbody>
       </table>
       
    )
}

export default Items;