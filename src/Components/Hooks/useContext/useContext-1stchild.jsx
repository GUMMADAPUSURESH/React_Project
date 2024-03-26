import React from 'react';
import SecondChild from './useContext-2ndchild';


const FirstChild = () => {

    return (
        <div>
            <h2>1st Child Component parent to 2nd Child</h2>
            <SecondChild/>
        </div>
    )
}

export default FirstChild;