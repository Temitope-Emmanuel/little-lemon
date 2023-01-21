function Card ({title, description, amount, img}) {
    return(
      <div className='card-container'>
        <div>
          <h4 className='header-4 text-bold'>{title}</h4>
          <p className='color-secondary font-karla text-clamp'>{description}</p>
          <p className='color-secondary font-karla text-medium'>${amount}</p>
        </div>
        <img src={img} alt='dinner' className="card-img" />
      </div>
    )
  }

  export default Card;