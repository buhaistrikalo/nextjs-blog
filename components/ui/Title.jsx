import React from 'react';

const Title = ({ level, children }) => {
    const Component = `h${level}`;

    return <Component>{children}</Component>;
};

export default Title;
