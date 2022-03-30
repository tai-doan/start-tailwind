import './App.css';
import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import StoreContext from './store'
import { GlobalHotKeys } from 'react-hotkeys';
import { eventList } from './utils';
import glb_sv from './utils/services/global_service'
import BackgroundService from './utils/services/background_service'

const Pages = lazy(() => import('./views/Pages'))
const Login = lazy(() => import('./views/Login'))

const App = () => {
    const [keyMap, setKeyMap] = useState({})
    const [handlersHotkeys, setHandlersHotkeys] = useState({

    })

    useEffect(() => {
        if (!!localStorage.theme) {
            glb_sv.theme = localStorage.theme
        } else {
            glb_sv.theme = 'dark'
            localStorage.setItem('theme', 'dark')
            glb_sv.commonEvent.next({ type: eventList.CHANGE_THEME })
        }

        if (!!localStorage.language) {
            glb_sv.language = localStorage.language
        } else {
            glb_sv.language = 'VI'
            localStorage.setItem('language', 'VI')
            glb_sv.commonEvent.next({ type: eventList.CHANGE_LANGUAGE })
        }

        return () => {
            // second
        }
    }, [])


    return (
        <GlobalHotKeys
            keyMap={keyMap}
            handlers={handlersHotkeys}
            allowChanges={true}
            configure={{
                ignoreTags: ['input', 'select', 'textarea'],
                ignoreEventsCondition: function () { },
            }}
        >
            <Suspense fallback={<></>}>
                <StoreContext>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route path="/" component={Pages} />
                        <Route exact path="/" component={Pages} />
                    </Switch>
                    <BackgroundService />
                </StoreContext>
            </Suspense>
        </GlobalHotKeys>
    )
}

export default App;
