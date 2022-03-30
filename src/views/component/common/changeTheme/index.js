import React, { useContext } from 'react'
import { eventList, glb_sv } from 'utils'
import { ReactComponent as Light } from 'assets/image/svg/theme_light.svg'
import { ReactComponent as Dark } from 'assets/image/svg/theme_dark.svg'
import { useTranslation } from 'react-i18next'
import { StoreContext } from 'store'

const ChangeTheme = ({ }) => {
    const { t } = useTranslation();
    const { theme, setTheme } = useContext(StoreContext);

    const onChangeTheme = () => {
        if (glb_sv.theme === 'dark') {
            glb_sv.theme = 'light'
            glb_sv.commonEvent.next({ type: eventList.CHANGE_THEME, value: 'light' })
        } else {
            glb_sv.theme = 'dark'
            glb_sv.commonEvent.next({ type: eventList.CHANGE_THEME, value: 'dark' })
        }
    }
    return (
        <div
            onClick={onChangeTheme}
            className="cursor-pointer bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
            <span className="sr-only">{t('select_theme')}</span>
            {theme === 'dark'
                ? <div className='h-6 w-40 flex'> <Dark /> &ensp; {t('light_theme')}</div>
                : <div className='h-6 w-40 flex'> <Light className='text-white' />&ensp; {t('dark_theme')} </div>
            }
        </div>
    )
}

export default ChangeTheme;
