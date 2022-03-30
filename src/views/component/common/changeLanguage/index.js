import React, { Fragment, useContext } from 'react'
import { glb_sv } from 'utils'
import { useTranslation } from 'react-i18next'
import { StoreContext } from 'store'
import { Menu, Transition } from '@headlessui/react'
import { ReactComponent as VietNamFlag } from 'assets/image/svg/lang_vi.svg'
import { ReactComponent as UKFlag } from 'assets/image/svg/lang_en.svg'
import { ReactComponent as IC_DOWN } from 'assets/image/svg/ic_down.svg'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ChangeLanguage = ({ }) => {
    const { t, i18n } = useTranslation()
    const { language, setLanguage } = useContext(StoreContext);

    const onChangeLanguage = key => {
        if (language === key) return
        i18n.changeLanguage(key)
        setLanguage(key)
        localStorage.setItem('language', key)
        glb_sv.language = key
    }

    return (
        <Menu as="div" className="ml-3 relative">
            <div>
                <Menu.Button className="bg-gray-800 flex items-center text-sm rounded-full text-white">
                    <span className="sr-only">{t('select_language')}</span>
                    {language === 'VI'
                        ? <div className='flex'> <VietNamFlag />&ensp;Tiếng Việt </div>
                        : <div className='flex'> <UKFlag />&ensp;English </div>
                    }
                    <IC_DOWN />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item onClick={() => onChangeLanguage('VI')}>
                        {({ active }) => (
                            <a
                                href="#"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 flex')}
                            >
                                <VietNamFlag /> &ensp; Tiếng Việt
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item onClick={() => onChangeLanguage('EN')}>
                        {({ active }) => (
                            <a
                                href="#"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 flex')}
                            >
                                <UKFlag /> &ensp; English
                            </a>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default ChangeLanguage;
