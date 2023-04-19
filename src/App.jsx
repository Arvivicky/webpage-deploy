import { useState } from 'react'
import './App.css'
import ParaTag from './components/para/para'
import NavBar from './components/nav/NavBar';
import Title from './components/title/Title';
import PosterTag from './components/poster/Poster';
import Upload from './upload/Upload';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './login/Login';
import Home from './components/home/Home';

const route=createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' >
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/upload' element={<Upload/>}/>
      </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={route}/>
    </div>
  )
}
export default App;
