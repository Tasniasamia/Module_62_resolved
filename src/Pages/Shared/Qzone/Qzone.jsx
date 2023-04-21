import React from 'react';
import q1 from '../../../assets/qZone1.png';
import q2 from '../../../assets/qZone2.png'
import q3 from '../../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div>
            <div><img src={q1} alt="q1" /></div>
            <div><img src={q2} alt="q2" /></div>
            <div><img src={q3} alt="q3" /></div>

        </div>
    );
};

export default Qzone;