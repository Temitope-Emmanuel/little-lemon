import Nav from '../../components/Nav'
import Main from './Main'
import './booking.css'
import DateSelector from './DateSelector';
import TimeSelector from './TimeSelector';
import Diners from './Diners';
import Cancel from '../../assets/close.svg'
import Check from '../../assets/check.svg'
import ContactInfo from './ContactInfo';

function Booking() {
  return (
    <>
      <Nav/>
      <Main/>
      <DateSelector/>
      <TimeSelector/>
      <Diners/>
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
