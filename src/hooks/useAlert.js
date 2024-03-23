import React, { useState } from 'react';

const useAlert = () => {
    const [alert, setAlert] = useState({show: false, text: '', type: 'danger'});

    const showAlert = ({text, type= 'danger'}) => setAlert({
        show: true,
        text,
        type
    })

    const hideAlert = () => setAlert({
        show: false,
        text: '',
        type: 'danger'
    })

    return {alert, showAlert, hideAlert}   // Hooks does not return jsx
}                                          // Hooks return object or array containing objects

export default useAlert;