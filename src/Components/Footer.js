import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-blue-400 text-center py-4 text-white fixed bottom-0 w-full'>
                <p>Copyright © {year} - All right reserved by Zisan</p>
            </div>
    );
};

export default Footer;