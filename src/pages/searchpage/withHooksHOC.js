import React from 'react';
import useWindowSize from '../../hooks/use-window-size';

export const withHooksHOC = (Component) => {
    return (props) => {
        const screenSize = useWindowSize();
  
        return <Component size={screenSize} {...props} />;
    };
};