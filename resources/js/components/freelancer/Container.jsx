import React from 'react';
import Options from './Options'
import Maincontainer from './Maincontainer'
import Space from './Space'

const Container = () => (
    <div>
        {/* <!-- container --> */}
        <div className="fcontainer">
            <Options />
            <Maincontainer />
            <Space />
        </div>
    </div>
);

export default Container;
