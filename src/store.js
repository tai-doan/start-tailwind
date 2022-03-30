import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { cloneDeep, isEqual, merge } from 'lodash'
import { eventList, glb_sv } from './utils'

export const StoreContext = React.createContext(null)

const changeTheme = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

export default ({ children }) => {
    const { i18n, t } = useTranslation()

    const [language, setLanguage] = useState('VI')
    const [theme, setTheme] = useState('dark') // ['dark', 'light']

    useEffect(() => {
        const commonEvent = glb_sv.commonEvent.subscribe(msg => {
            if (msg.type === eventList.CHANGE_LANGUAGE) {
                setLanguage(glb_sv.language)
            }
            if (msg.type === eventList.CHANGE_THEME) {
                setTheme(glb_sv.theme)
                localStorage.setItem('theme', glb_sv.theme)
                changeTheme()
            }
        })

        return () => {
            commonEvent.unsubscribe()
        }
    }, [])

    const store = {
        language,
        setLanguage,
        theme,
        setTheme,

    }

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}