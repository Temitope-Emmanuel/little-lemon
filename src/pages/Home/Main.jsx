import HeroImage from '../../assets/restauranfood.jpg'
import LemonDessert from '../../assets/lemondessert.jpg'
import GreekSalad from '../../assets/greeksalad.jpg'
import Card from '../../components/Card';
import Pill from '../../components/Pill';
import {
  Link
} from "react-router-dom";


function Main() {
  const tags = ["Lunch", "Mains", "Desserts", "A La Carte", "Specials"]
  const meals = [
    {
      title: 'Greek Salad',
      description: `The famous greek salad of crispy lettuce, peppers,
       olives and our Chicago style feta cheese, garnished with crunchy
        garlic and rosemary croutons.`,
        amount: 12.99,
        img: HeroImage
    },
    {
      title: 'Brushetta',
      description: `Our Bruschetta is made from grilled bread that has been
       smeared with garlic and seasoned with salt and olive oil. Toppings of tomato,
        veggies, beans, cured pork, or cheese are examples of variations. In Italy, a
         brustolina grill is frequently used to create bruschetta.`,
        amount: 7.99,
        img: LemonDessert
    },
    {
      title: 'Grilled Fish',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.`,
        amount: 20.00,
        img: GreekSalad
    },
    {
      title: 'Pasta',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.`,
        amount: 18.99,
        img: GreekSalad
    },
    {
      title: 'Lemon Dessert',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.`,
        amount: 6.99,
        img: LemonDessert
    }
  ]
  return (
      <main>
        <section className="hero bg-secondary">
          <div>
            <h2 className="color-primary header-1">Little Lemon</h2>
            <h6 className="color-gray header-2">Chicago</h6>
          <div className='hero-subcontainer'>
            <p className="color-white">
              We are a family owned <br/> Mediterranean restaurant, <br/>
               focused on traditional <br/> recipes served with a <br/> modern twist.
            </p>
            <img className='hero-img' alt="hero" src={HeroImage}/>
          </div>
          <Link to={'/booking'}>
            <button className="button">Reserve a table</button>
          </Link>
          </div>
        </section>
        <section>
          <h3 className="header-3 text-extrabold">ORDER FOR DELIVERY!</h3>
          <div className='pill-container'>
            {tags.map((item,idx) => (
              <Pill key={idx} label={item} />
            ))}
          </div>
          <div>
            {
              meals.map(({title, description, amount, img},idx) => <Card key={idx} {...{title, description, amount, img}} />)
            }
          </div>
        </section>
      </main>
    );
  }
  export default Main;
