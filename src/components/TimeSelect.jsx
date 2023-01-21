function TimeSelect ({label,active, subLabel, onClick}) {
    return(
        <div className='bg-gray time-select-container d-flex direction-column align-center' onClick={onClick} style={{
            backgroundColor: active ? '#000000' : '#EDEFEE',
            color: active ? '#F4CE14' : '#000000'
        }}>
            {
                subLabel?.length &&
                <p className="font-13">{subLabel}</p>
            }
            <p className="font-18">{label}</p>
        </div>
    )
}

export default TimeSelect;