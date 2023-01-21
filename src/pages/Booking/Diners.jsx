import { useState } from "react";

function Diners () {
    const [currentDinerNo, setCurrentDinerNo] = useState(0)
    const increaseNo = () => setCurrentDinerNo(prevSt => prevSt+1);
    const decreaseNo = () => setCurrentDinerNo(prevSt => prevSt-1);
    return(
        <div className="bg-secondary section-subcontainer d-flex align-center justify-between">
            <h6 className="header-6">Diners</h6>
            <div className='bg-gray d-flex align-center diner-subcontainer'>
                <button disabled={currentDinerNo < 1} onClick={decreaseNo}>-</button>
                <p>{currentDinerNo}</p>
                <button onClick={increaseNo}>+</button>
            </div>
        </div>
    )
}

export default Diners;