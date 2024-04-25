import React, { useState } from 'react';
import './header.css';
import { NavLink} from 'react-router-dom';

const hooks = [
    {navlink: 'useState', id: 'useState'},
    {navlink: 'useEffect', id: 'useEffect'},
    {navlink: 'useReducer', id: 'useReducer'},
    {navlink: 'useContext', id: 'useContext'},
    {navlink: 'useCallback', id: 'useCallback'},
    {navlink: 'Custom Hooks', id: 'customHooks'},
    {navlink: 'Nested Routing', id: 'nestedRoutes'},
    {navlink: 'Life Cycle', id: 'lifeCycle'},
    {navlink: 'Dynamic Routes', id: 'users'}
]

const Header = () => {
    const [navHover, setNavHover] = useState(false);
    const [cardHover, setCardHover] = useState(false);

  return (
    <div className='header-bar'>
        <nav className='nav-links'>
            <ul className='nav-link-list'>
                <li className='nav-link' onMouseEnter={() => setNavHover(true)} onMouseLeave={() => setNavHover(false)}>
                    <NavLink to='/' style={{textDecoration: 'none', color: 'white'}}><strong>Home</strong></NavLink>
                </li>
            </ul>
            <ul className='nav-list'>
                {hooks.map((eachHook) => {
                    return(
                        <li className='nav-list-link' key={eachHook.id}>
                            <NavLink to={`/${eachHook.id}`}>
                                <button className='nav-button'>
                                    <strong>{eachHook.navlink}</strong>
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
                        const {navlink, id} = eachHook;
                        return(
                            <li key={id}>
                                <a className='nav-link' href={`${id}`}>{navlink}</a>
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
