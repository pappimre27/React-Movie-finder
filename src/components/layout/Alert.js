import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);

    const { alert } = alertContext;

    return (
        alert !== null && (
            <div >
                <h6 style={{ color: '#b80d43' }}>{alert.msg}</h6>
            </div>
        )
    );
};

export default Alert
