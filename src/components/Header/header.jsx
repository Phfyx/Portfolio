import React from 'react';
import Pdf from '../../assets/MohamedBenomar.pdf';
import { useSelector, useDispatch } from 'react-redux';
import { resetProjet } from '../../state/Slice/Slice';


function Header() {

    const dispatch = useDispatch();
    return (
        <>
            <nav className='NavBar flex justify-between'>
                <img onClick={() => dispatch(resetProjet())} src="/static/Logo.svg" alt="logo" className='w-36 cursor-pointer'/>
                <ul className='flex'>
                    <li>
                        <a href="https://github.com/Phfyx" className='flex ml-8'>
                            <img src="/static/LogoGitHub.png" alt="Logo GitHub" className='w-10'/>
                        </a> 
                    </li>
                    <li>
                    <a href="https://www.linkedin.com/in/mohamedbenomar/" className='flex ml-8'><img src="/static/Linkedinlogo.png" alt="Logo LinkedIn" className='w-10'/></a> 
                    </li>
                    <li>
                       <a href={Pdf} className='flex ml-8'><img src="/static/Cvlogo.png" alt="Logo CV" className='w-10'/></a> 
                    </li>
                </ul>
            </nav>
        </>
        
    );
}

export default Header;
