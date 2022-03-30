import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Switch, useHistory, useParams } from 'react-router-dom'
import { glb_sv } from '../../utils'
import Headers from './Headers'
import Sidebar from './Sidebar'

const PagesView = () => {

    const isNotFound = checkRouterLink()
    return (
        <div className=''>
            {glb_sv.authFlag && (<>
                <Headers />
            </>)}
            <div className='flex'>
                <Sidebar />
                <div className='flex flex-no-wrap p-2'>
                    Pages layout
                </div>
            </div>
        </div>
    )
}

const checkRouterLink = () => {
    const link = window.location.pathname.replace('/', '');
    const list = [
        '',
        'login',
    ]
    return list.includes(link)
}

export default PagesView
