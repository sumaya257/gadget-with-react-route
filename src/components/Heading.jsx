import React from 'react';

const Heading = ({title,subtitle}) => {
    return (
        <div className='text-center my-16'>
            <h2 className='text-5xl'>{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
};

export default Heading;