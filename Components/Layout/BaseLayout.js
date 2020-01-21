import React from 'react';
import Header from '../Shared/Header';

function BaseLayout(props) {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    );
}

export default BaseLayout
