import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home'
import RepoDetails from './pages/RepoDetails'
import AppOutlet from './pages/AppOutlet'
import ErrorPage from './pages/ErrorPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
      <Route path="/Repodetails" element={<AppOutlet />}>
        <Route path=":id" element={<RepoDetails />} />
      </Route>
    </>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
)

function muba(){

  return(
<>
<Home  />

</>

  )
}
