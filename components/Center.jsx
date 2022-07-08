import React from 'react';

const Center = ({ children }) => {
    return (
        <div className="center-block">
            {children}
            <style jsx>{`
                .center-block {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    padding: 0 5px;
                }
            `}</style>
        </div>
    );
};

export default Center;
