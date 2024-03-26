import React, { useState } from 'react';
import './header.css';
import { NavLink} from 'react-router-dom';

const hooks = [
    {hook: 'useState', id: 'useState'},
    {hook: 'useEffect', id: 'useEffect'},
    {hook: 'useReducer', id: 'useReducer'},
    {hook: 'useContext', id: 'useContext'},
    {hook: 'useCallback', id: 'useCallback'},
    {hook: 'Custom Hooks', id: 'customHooks'}
]

const Header = () => {
    const [navHover, setNavHover] = useState(false);
    const [cardHover, setCardHover] = useState(false);

  return (
    <div className='header-bar'>
        <nav className='nav-links'>
            <ul className='nav-link-list'>
                <li className='nav-link' onMouseEnter={() => setNavHover(true)} onMouseLeave={() => setNavHover(false)}>
                    <a style={{textDecoration: 'none', color: 'white'}} href='/'><strong>Home</strong></a>
                </li>
            </ul>
            <ul className='nav-list'>
                {hooks.map((eachHook) => {
                    return(
                        <li className='nav-list-link' key={eachHook.id}>
                            <NavLink to={`/${eachHook.id}`}>
                                <button className='nav-button'>
                                    <strong>{eachHook.hook}</strong>
                                </button>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>      
        </nav>
        {(navHover || cardHover) && 
            <div className='nav-card' onMouseEnter={() => setCardHover(true)} onMouseLeave={() => setCardHover(false)}>
                <ul className='nav-link-list'>
                    {hooks.map((eachHook) => {
                        const {hook, id} = eachHook;
                        return(
                            <li key={id}>
                                <a className='nav-link' href={`${id}`}>{hook}</a>
                            </li>
                        )
                    })}
                </ul>
            </div> 
        }
    </div>
  )
}

export default Header
