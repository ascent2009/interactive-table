import React from 'react';
import './FilterData.css';

const FilterData = (props) => {
    
        const {
          // value,
          // search,
          onChange,
          onClick
        } = props;
                
      return (
        
        <form className="searchBlock">
            <input 
              type="text"
              className="input"
              onChange={onChange}
              // value={search}
            />
            <button
              // onChange={onChange}
              type="button"
              onClick={() => onClick()}
              // value={value}
              className="btn">
                Найти
            </button>
        </form>        
    )
}

export default FilterData;