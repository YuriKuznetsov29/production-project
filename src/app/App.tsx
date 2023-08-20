import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useState } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import { useTheme } from './providers/ThemeProvider'
import { type } from 'os'

const App = () => {
    const { theme } = useTheme()

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <button onClick={() => setIsOpen(true)} type="button">
                    toggle
                </button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro illum quos
                    debitis recusandae modi aperiam, facere iusto delectus commodi assumenda,
                    perferendis aliquid exercitationem atque fugiat, voluptatem architecto
                    praesentium ipsum culpa?
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
