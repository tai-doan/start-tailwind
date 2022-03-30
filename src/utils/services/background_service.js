import React, { memo, useContext, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StoreContext } from '../../store'

function BackgroundServiceMemo() {
    const { t } = useTranslation()
    const { language } = useContext(StoreContext)

    useEffect(() => {
        //   first

        return () => {
            // second
        }
    }, [])
    return (
        <>
        </>
    )
}

const BackgroundService = memo(BackgroundServiceMemo)
export default BackgroundService
