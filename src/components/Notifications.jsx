import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';

export const notifications = React.createContext({ show: { } });

export default function Notifications({ children }) {
    const toast = useRef();
    const createToastFn = ({ severity }) => (body) => {
        const summary = severity.charAt(0).toUpperCase() + severity.slice(1);
        return toast.current.show({ severity, summary, detail: body, life: 3000 });
    };
    const success = createToastFn({ severity: 'success' });
    const info = createToastFn({ severity: 'info' });
    const warn = createToastFn({ severity: 'warn' });
    const error = createToastFn({ severity: 'error' });

    const show = {
        success,
        info,
        warn,
        error
    };

    return (
        <notifications.Provider value={show}>
            {children}
            <Toast ref={toast} />
        </notifications.Provider>
    );
}
