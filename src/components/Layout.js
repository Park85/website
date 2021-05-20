import React from 'react'
import Nav from './Navbar'
import Footer from './Footer'
import '../styles/globals.scss'

const Layout = ({children})=>{
    return(
        <>
            <Nav/>
                {children}
            <Footer/>
        </>
    )
}

export default Layout;
