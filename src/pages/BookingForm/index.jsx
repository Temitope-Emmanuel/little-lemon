import Nav from '../../components/Nav'
import Main from './Main'
import './booking.css'
import DateSelector from './DateSelector';
import Diners from './Diners';
import Cancel from '../../assets/close.svg'
import Check from '../../assets/check.svg'
import ContactInfo from './ContactInfo';
import Occasion from './Occasion';
import {useAvailableDate, useAvailableTime} from './constants';


function BookingForm() {
  const {availableDate, updateDate} = useAvailableDate();
  const {availableTimes, updateTime} = useAvailableTime();

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

export default BookingForm;
