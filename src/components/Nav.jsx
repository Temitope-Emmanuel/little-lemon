import {ReactComponent as Logo} from '../assets/Logo.svg';
import {ReactComponent as Basket} from '../assets/Basket.svg';
import {ReactComponent as Hamburger} from '../assets/Hamburger.svg';

function Nav() {
    return (
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px'
      }}>
        <Hamburger/>
        <Logo/>
        <Basket/>
      </nav>
    );
  }

  export default Nav;
