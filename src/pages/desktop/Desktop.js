import React from 'react';
import "./desktop.scss";
const Desktop = () => {
    return (
        <React.Fragment>
            <div className="desktop-view">
                <div className="desktop-text-view">
                    <div className="logo" />
                    <div className="text">
                        ای بابا ببخشید ولی وِدِلا برای موبایل‌هاتون طراحی شده!
                    </div>
                    <div className="sub-text">
                        برای استفاده از این اپلیکیشن، همین صفحه رو توی گوشیت باز کن.
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Desktop;
