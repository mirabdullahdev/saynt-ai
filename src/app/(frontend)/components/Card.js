import React from 'react';
import logo from '../../../../public/images/logo.png'
import Image from 'next/image';

const Card = ({ heading, description, className }) => {
    return (
        <div className={`card_inner ${className}`}>
            <div className='logo_parent'>
                <div className='logo_area'>
                    <Image
                        src={logo}
                        alt="..."
                        title="..."
                        priority
                    />
                </div>
            </div>
            <h3>{heading}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;