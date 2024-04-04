import React from 'react'
import FirstChild from './useContext-1stchild';

const UseContextParent = () => {

    return (
        <div id='useContext'>
            <h1>Parent Component</h1>
            <FirstChild/>
        </div>
    )
}

export default UseContextParent;