import {useState} from 'react';


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

  export const useAvailableDate = () => {
      const [availableDate, setAvailableDate] = useState(date.map(item => ({
        ...item,
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

      return({
        updateDate,
        availableDate
      })
  }
export const useAvailableTime = () => {
    const [availableTimes, setAvailableTimes] = useState(timeSelect.map(time => ({
      time,
      active: false
    })))
    const updateTime = (time) => {
        const foundTimeIdx = availableTimes.findIndex(item => item.time === time)
        if(foundTimeIdx > -1){
          const newTimes = [...availableTimes]
          newTimes.splice(foundTimeIdx, 1, {
            ...newTimes[foundTimeIdx],
            active: !newTimes[foundTimeIdx].active
          })
          setAvailableTimes(newTimes)
        }
      }
      return({
        availableTimes,
        updateTime
      })
}