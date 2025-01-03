import './App.css';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import {UserList} from './pages/UserList.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetail from './pages/UserDetail.js';
import { UserForm } from './pages/UserForm.js';
import { ProfileList } from './pages/ProfileList.js'
import  UserLogin from './pages/UserLogin.js'
import { AuthProvider } from './components/AuthContext.js';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element = {<UserLogin/>}/>
        <Route path="/home" element={<Home />} />
        <Route path= "/users" element = {<UserList/>}/>
        <Route path = "/users/:id" element = {<UserDetail/>}/>
        <Route path = "/users/new" element = {<UserForm/>}/>
        <Route path = "/users/all" element = {<ProfileList/>}/>
        <Route path = "users/:id/edit" element = {<UserForm/>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
