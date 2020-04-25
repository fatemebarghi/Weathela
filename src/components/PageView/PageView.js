import React from 'react';
import "./pageView.scss";

const PageView = (props) => {
    return (
        <React.Fragment>
            <div className="page">
                {props.children}
            </div>
        </React.Fragment>
    )
};

export default PageView;