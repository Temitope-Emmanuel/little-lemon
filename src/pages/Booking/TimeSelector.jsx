import { useState } from "react";
import TimeSelect from "../../components/TimeSelect";

const timeSelect = [
    "11:30", "12:00", "12:30","13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30", "16:00"
]

function TimeSelector () {
    const [currentTime, setCurrentTime] = useState('');

    return(
        <div className="bg-secondary section-subcontainer">
            <h6 className="header-6">Time</h6>
            <div className='time-select-subcontainer'>
                {timeSelect.map((item, idx) => (
                    <TimeSelect label={item} active={currentTime === item}
                     key={idx} onClick={() => setCurrentTime(item)} />
                ))}
            </div>
        </div>
    )
}

export default TimeSelector;