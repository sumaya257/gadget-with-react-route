import React from 'react';

const Heading = ({ title, subtitle, children }) => {
    return (
        <div className="text-center my-4 h-[200px] bg-[#9538E2] text-white">
            <h2 className="text-3xl pt-5">{title}</h2>
            <p className="mt-2">{subtitle}</p>
            {children}
        </div>
    );
};

export default Heading;
