import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './Components/Header.jsx'
import Home from './Pages/Home.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import slice from './slice.js'
import { Provider } from 'react-redux'
import './style/style.css'

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
