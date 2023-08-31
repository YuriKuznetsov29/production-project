import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'
import { useTheme } from './providers/ThemeProvider'

const App = () => {
    const { theme } = useTheme()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />

                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
