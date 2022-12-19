import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavbarElements'

const Navbar = () => {
    return (
        <>
        <Nav>
            <Bars />
            <NavMenu>
                <NavLink to='/inserir'activeStyle>
                    Calcular viabilidade
                </NavLink>
                <NavLink to='/historico'activeStyle>
                    Histórico
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar