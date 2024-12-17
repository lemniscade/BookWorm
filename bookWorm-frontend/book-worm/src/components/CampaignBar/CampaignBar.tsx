import React from "react";
import './CampaignBar.scss'
export default function CampaignBar() {
    return (
        <div className="column">
            <div className="column background">
                <div>
                    <svg className="cross-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                    >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                        />
                    </svg>
                </div>
                <div className="margin padding weight-title">
                    Today is the Last Day for Christmas & Hanukkah Gift Orders!
                </div>
                <div className="row weight-time width">
                    <div className="column border">
                        <div>11</div>
                        <div>Hours</div>
                    </div>
                    <div className="column border">
                        <div>20</div>
                        <div>Minutes</div>
                    </div>
                    <div className="column border">
                        <div>40</div>
                        <div>Seconds</div>
                    </div>
                </div>
            </div>
            <div className="background-subtitle">
                Every purchase financially supports local independent bookstores! Learn more.
            </div>
        </div>
    );
}
