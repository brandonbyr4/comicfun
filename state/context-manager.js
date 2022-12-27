import { createContext, useState } from 'react'

const ContextManager = createContext()

export function ContextWrapper({ children }) {
    const [cookiesDisabled, setCookiesDisabled] = useState(null)

    const gdprUnsubscribe = () => {
        window['ga-disable-GA_MEASUREMENT_ID'] = true
        setCookiesDisabled(true)
        alert("Disabled non-essential cookies.")
    }

    let contextData = {
        cookiesDisabled:cookiesDisabled,
        setCookiesDisabled:setCookiesDisabled,
        gdprUnsubscribe:gdprUnsubscribe,
    }

    return (
        <ContextManager.Provider value={contextData}>
            {children}
        </ContextManager.Provider>
    )
}

export default ContextManager