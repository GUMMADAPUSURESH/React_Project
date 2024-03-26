import React, { useContext } from 'react';
import { DataContext } from '../../../context/dataContext';


const SecondChild = () => {
    const data = useContext(DataContext);
    const {id, Text} = data;

    return (
        <>
            <div>
                <h3>2nd Child Component</h3>
                <p><strong>ID: </strong>{id} <strong>Text: </strong> {Text}</p>
            </div>
            <hr/>
        </>
    )
}

export default SecondChild;