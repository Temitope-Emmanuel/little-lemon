import TimeSelect from "../../components/TimeSelect";


function DateSelector ({date, time, updateDate, updateTime}) {
    return(
        <div className="bg-secondary section-subcontainer">
            <div>
                <h5 className="header-6" data-testid="date-selector-title">Date</h5>
            </div>
            <div className='time-select-subcontainer'>
                {
                    date.map(({date, day, active},idx) =>
                    <TimeSelect key={idx} active={active}
                    testId={`date-select-${idx}`}
                    label={date} subLabel={day}
                    onClick={() => updateDate(date)}
                    />
                    )
                }
            </div>
            <h6 className="header-6">Time</h6>
            <div className='time-select-subcontainer'>
                {time.map(({time, active}, idx) => (
                    <TimeSelect label={time} active={active}
                    testId={`time-select-${idx}`}
                     key={idx} onClick={() => updateTime(time)} />
                ))}
            </div>
        </div>
    )
}

export default DateSelector;