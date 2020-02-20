import React from 'react';

const withClassFn = (WrappedComponent,className) => {
    return props => (
        <div className =  {className}> 
        <WrappedComponent {...props}/>
        </div>
    );
};

export default withClassFn;