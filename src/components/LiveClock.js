import { Component } from "react";
import Clock from 'react-live-clock';

class LiveClock extends Component {
    render() {
        return (
            <div>
                <Clock format={'HH : mm : ss'} ticking={true} timezone={'Asia/Seoul'} />
            </div>
        );
    };
};

export default LiveClock;