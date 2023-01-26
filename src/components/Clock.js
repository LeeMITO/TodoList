import React from "react";
import './Clock.scss';

class Clock extends React.Component {
    state = {
        date: new Date()
    }
    render() {
        const { date } = this.state;
        return (
            <div className="Clock">
                <div className='CurTime'>
                    {date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}
                    &nbsp;:&nbsp;
                    {date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}
                </div>
                <div className="flexBox">
                    <div className="CurDate">
                        {date.getFullYear()}-
                        {date.getMonth() + 1}-
                        {date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}
                    </div>
                    <div ClassName="CurDay">
                        {
                        date.getDay() === 0
                        ? "일(Sunday)"
                        : date.getDay() === 1
                        ? "월(Monday)"
                        : date.getDay() === 2
                        ? "화(Tuesday)"
                        : date.getDay() === 3
                        ? "수(Wednesday)"
                        : date.getDay() === 4
                        ? "목(Thursday)"
                        : date.getDay() === 5
                        ? "금(Friday)"
                        : "토(Saturday)"
                        }
                    </div>
                </div>

            </div>
        );
    };

    getDate = () => {
        this.setState({
            date: new Date()
        });
    };

    componentDidMount() {
        this.oneMinuteCall = setInterval(() => this.getDate(), 60000);
    }
    
    componentWillUnmount() {
        clearInterval(this.oneMinuteCall);
    }
}

export default Clock;