import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './Components/Header.jsx'
import Home from './Pages/Home.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import slice from './slice.js'
import { Provider } from 'react-redux'
import './style/style.css'
import { configureStore } from '@reduxjs/toolkit'
//import { signal } from '@preact/signals-react'

/*const autoLogin = async () => {
    let _autoLogin = await fetch(import.meta.env.VITE_REACT_APP_BACKEND_URL + '/auto-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: document.cookie })
    }).then(res => res.json())

    return _autoLogin.success ? _autoLogin.user : false
}
const user = signal(await autoLogin())*/

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

const store = configureStore({
    reducer: { slice }
})

const router = createBrowserRouter([
    {
        element: <><Header /><Outlet /></>,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </Provider>
)
