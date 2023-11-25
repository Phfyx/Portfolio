import React from 'react';
import Pdf from '../../assets/MohamedBenomar.pdf';


function Header() {
    return (
        <>
            <nav className='NavBar flex justify-between'>
                <img src="" alt="logo" />
                <ul className='flex justify-around p-8 w-1/3'>
                    <li className='w-10'>
                        <a href="https://github.com/Phfyx"><img src="/static/LogoGitHub.png" alt="Logo GitHub" /></a> 
                    </li>
                    <li className='w-10'>
                    <a href="https://www.linkedin.com/in/mohamedbenomar/"><img src="/static/Linkedinlogo.png" alt="Logo LinkedIn" /></a> 
                    </li>
                    <li className='w-10'>
                       <a href={Pdf}><img src="/static/Cvlogo.png" alt="Logo CV" /></a> 
                    </li>
                </ul>
            </nav>
        </>
        
    );
}

export default Header;
