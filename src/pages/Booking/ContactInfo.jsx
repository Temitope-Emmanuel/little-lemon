import Edit from '../../assets/edit.svg'

const contactInfo = {
    "Last Name": "Temiloluwa",
    "First Name": "Ojo",
    "Email": 'temitopeojo0@gmail.com',
    "Phone no.": "07088237042"
}

function ContactInfo () {
    return(
        <div className="bg-secondary section-subcontainer">
            <h6 className="header-6">Contact Info</h6>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>
                {
                    Object.entries(contactInfo).map(([key,values], idx) => (
                        <div key={idx} className="bg-gray" style={{
                            padding: '5px',
                            minWidth: '40%',
                            margin: '5% 5px',
                            borderRadius: '5px',
                        }}>
                            <p className='text-bold'>{key}</p>
                            <p className='text-medium'>{values}</p>
                        </div>
                    ))
                }
            </div>
            <button className='booking-btn bg-primary contact-btn'>
                <img src={Edit} alt='edit' />
                Edit
            </button>
        </div>
    )
}

export default ContactInfo;