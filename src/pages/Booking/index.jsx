import Nav from '../../components/Nav'
import Main from './Main'
import './booking.css'
import DateSelector from './DateSelector';
import Diners from './Diners';
import Cancel from '../../assets/close.svg'
import Check from '../../assets/check.svg'
import ContactInfo from './ContactInfo';
import Occasion from './Occasion';
import { useEffect, useState } from 'react';

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

const timeSelect = [
  "11:30", "12:00", "12:30","13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00"
]


function Booking() {
  useEffect(() => {
    console.log(window.fetchAPI)
  },[])
  const [availableDate, setAvailableDate] = useState(date.map(item => ({
    ...item,
    active: false
  })))
  const [availableTimes, setAvailableTimes] = useState(timeSelect.map(time => ({
    time,
    active: false
  })))

  const updateDate = (date) => {
    const foundDateIdx = availableDate.findIndex(item => item.date === date)
    if(foundDateIdx > -1){
      const newDates = [...availableDate]
      newDates.splice(foundDateIdx, 1, {
        ...newDates[foundDateIdx],
        active: !newDates[foundDateIdx].active
      })
      setAvailableDate(newDates)
    }
  }

  const updateTime = (time) => {
    const foundTimeIdx = availableTimes.findIndex(item => item.time === time)
    console.log(foundTimeIdx)
    if(foundTimeIdx > -1){
      const newTimes = [...availableTimes]
      newTimes.splice(foundTimeIdx, 1, {
        ...newTimes[foundTimeIdx],
        active: !newTimes[foundTimeIdx].active
      })
      setAvailableTimes(newTimes)
    }
  }

  return (
    <>
      <Nav/>
      <Main/>
      <DateSelector date={availableDate} updateDate={updateDate}
       time={availableTimes} updateTime={updateTime} />
      <Diners/>
      <Occasion/>
      <ContactInfo/>
      <div className="color-gray btn-container">
        <button className='bg-primary booking-btn'>
          <img src={Cancel} alt='close' />
          Cancel
        </button>
        <button className='booking-btn bg-primary'>
          <img src={Check} alt='close' />
          Submit
        </button>
      </div>
    </>
  );
}

export default Booking;
