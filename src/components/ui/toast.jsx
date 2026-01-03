"use client"; 
import { useState, useEffect } from 'react';
const toastEventManager = {
    listeners: [],
    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    },
    notify(type, message) {
        this.listeners.forEach(listener => listener({ type, message }));
    }
};
export const toast = {
    success: (message) => {
        toastEventManager.notify('success', message);
    },
    error: (message) => {
        toastEventManager.notify('error', message);
    },
    info: (message) => {
        toastEventManager.notify('info', message);
    }
};
export function ToastDisplay() {
    const [toasts, setToasts] = useState([]);
    useEffect(() => {
        const unsubscribe = toastEventManager.subscribe(({ type, message }) => {
            const id = Date.now();
            setToasts(prev => [...prev, { id, type, message }]);
            setTimeout(() => {
                setToasts(prev => prev.filter(toast => toast.id !== id));
            }, 5000);
        });
        return unsubscribe;
    }, []);

    return (
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
            {toasts.map((toastItem) => (
                <div
                    key={toastItem.id}
                    className={`px-4 py-3 rounded-lg shadow-lg flex items-center min-w-[300px] transform transition-all duration-300 animate-slideIn ${toastItem.type === 'success'
                            ? 'bg-green-50 border border-green-200 text-green-800'
                            : toastItem.type === 'error'
                                ? 'bg-red-50 border border-red-200 text-red-800'
                                : 'bg-blue-50 border border-blue-200 text-blue-800'
                        }`}
                >
                    {toastItem.type === 'success' ? (
                        <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    ) : toastItem.type === 'error' ? (
                        <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                    )}
                    <span className="text-sm font-medium">{toastItem.message}</span>
                </div>
            ))}
        </div>
    );
}