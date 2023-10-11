import React from 'react';


function Header() {
    return (
        <>
            <nav>
             <ul className='flex justify-around p-8'>
                    <li className='w-10'>
                        <img src="src/assets/LogoGitHub.png" alt="Logo GitHub" />
                    </li>
                    <li className='w-10'>
                        <img src="src/assets/LinkedInlogo.png" alt="Logo GitHub" />
                    </li>
                    <li className='w-10 hover:w-11'>
                        <img src="src/assets/cv.png" alt="Logo GitHub" />
                    </li>
                </ul>
            </nav>
        </>
        
    );
}

export default Header;
