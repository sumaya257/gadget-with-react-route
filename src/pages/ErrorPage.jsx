import React from 'react';


const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                {/* Set the favicon */}
                <title>ErrorPage || Gadget</title>
            </Helmet>
            <div className='flex items-center justify-center h-screen'>
                <div className='text-center font-bold'>
                    <h2 className='text-3xl'>Error: 404</h2>
                    <p>Something went wrong <br /> Fix it</p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;