import React from 'react';
import './table.css';

const data = require('./data');

const Table = () => {
    // console.log('data: ', data);
    const dataImport = data[0];
    
    function renderHeaderCells() {
        let HeaderCells = [];
        Object.keys(dataImport).map((x, i) => {
            let items = Object.values(dataImport)[i];
            // console.log('items: ', items);
            // console.log('x: ', x);
            HeaderCells.push(
            <td colSpan={Object.keys(items).length} key={i.name}>{x}</td>
            )
            return HeaderCells;
        })
        return HeaderCells;
    }

    function renderSubHeaders() {
        let subHeaders = [];
        let subs = Object.values(dataImport);
        subs.map((x, i) => {
            if(subs[i] !== undefined) {
                Object.keys(subs[i]).map( y => {
                    subHeaders.push(<td>{y}</td>)
                    return subHeaders})
            }
            return subHeaders;
        })
        console.log('subs: ', subs);
        
        return subHeaders; 
        
    }

    function renderResults() {
        let results = [];
        let res = Object.values(dataImport);
        res.map((x, i) => {
            if(res[i] !== undefined) {
                Object.values(res[i]).map( y => {
                    results.push(<td>{y}</td>)
                    return results})
            }
            return results;
        })
        return results;
    }

    return (
        <>
    
        <p>Basket</p>
        <table className="table">
            <th>
                <tr>{renderHeaderCells()}</tr>
            </th>
            <tbody>
                <tr>{renderSubHeaders()}</tr>
                <tr>{renderResults()}</tr>
            </tbody>
        </table>
        </>
    )
}

export default Table;