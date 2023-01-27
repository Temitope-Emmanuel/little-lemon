import { useState } from "react";

function Occasion () {
    return(
        <div className="bg-secondary section-subcontainer d-flex align-center justify-between">
            <h6 className="header-6">Occasion</h6>
            <div className='bg-gray d-flex align-center diner-subcontainer'>
                <select style={{
                    backgroundColor: '#EDEFEE',
                    borderRadius: '5px',
                    color: '#1C1B1F',
                    border: 'none',
                    outline: 'none',
                    height: '30px',
                    fontSize: '16px',
                }}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
        </div>
    )
}

export default Occasion;