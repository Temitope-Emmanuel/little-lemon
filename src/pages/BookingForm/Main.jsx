import HeroImage from '../../assets/restauranfood.jpg'

function Header () {
    return(
        <section className="hero hero-header bg-secondary">
            <div>
                <h2 className="color-primary header-1">Little Lemon</h2>
                <p className="color-white">
                    At Little Lemon, you can now <br/>
                    make a reservation whether for <br/>
                    those special events or just <br/>
                    don’t want the hustle of waiting.
                </p>
            </div>
            <img className='booking-img' alt="hero" src={HeroImage}/>
        </section>
    )
}

export default Header;