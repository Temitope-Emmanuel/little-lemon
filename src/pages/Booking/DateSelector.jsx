import {useState} from 'react';
import TimeSelect from "../../components/TimeSelect";

const date = [
    {
        day: "Sun",
        date: 10
    },
    {
        day: "Mon",
        date: 11
    },
    {
        day: "Tue",
        date: 12
    },
    {
        day: "Wed",
        date: 13
    },
    {
        day: "Thurs",
        date: 14
    },
    {
        day: "Fri",
        date: 15
    },
    {
        day: "Sat",
        date: 16
    }
]

function DateSelector () {
    const [currentTime, setCurrentTime] = useState('');
    return(
        <div className="bg-secondary section-subcontainer">
            <div>
                <h5>Date</h5>
            </div>
            <div className='time-select-subcontainer'>
                {
                    date.map(({date, day},idx) => 
                    <TimeSelect key={idx} active={currentTime === date}
                    label={date} subLabel={day}
                    onClick={() => setCurrentTime(date)}
                    />
                    )
                }
            </div>
        </div>
    )
}

export default DateSelector;