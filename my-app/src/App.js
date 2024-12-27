import './App.css';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import {UserList} from './pages/UserList.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetail from './pages/UserDetail.js';
import { UserForm } from './pages/UserForm.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path= "/users" element = {<UserList/>}/>
        <Route path = "/users/:id" element = {<UserDetail/>}/>
        <Route path = "/users/new" element = {<UserForm/>}/>
        <Route path = "users/:id/edit" element = {<UserForm/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
