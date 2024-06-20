import React from "react";
import "./loading.css";
const Loading = () => {
    return (
        <div>
            <div className="rs-loading-main">
                <div className="rsl-wave">
                    <span className="rsl-wave--icon"></span>
                    <span className="rsl-wave--icon"></span>
                    <span className="rsl-wave--icon"></span>
                </div>
            </div>
        </div>
    );
};

export default Loading;
