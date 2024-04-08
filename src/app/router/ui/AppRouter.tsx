import { getUserAuthData } from '@/entities/User'
import { Suspense, memo, useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { AppRouterProps, routeConfig } from '@/shared/config/routeConfig/routeConfig'
import { PageLoader } from '@/widgets/PageLoader'
import { RequireAuth } from './RequireAuth'

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData)

    const renderWithWrapper = useCallback((route: AppRouterProps) => {
        const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>

        return (
            <Route
                key={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
                path={route.path}
            />
        )
    }, [])

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    )
}

export default memo(AppRouter)
