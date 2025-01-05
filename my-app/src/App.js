
import Home from './pages/Home.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserForm } from './pages/UserForm.js';
import { ProfileList } from './pages/ProfileList.js'
import UserLogin from './pages/UserLogin.js'
import { AuthProvider } from './hooks/AuthContext.js';
import Upload from './pages/Upload.js';
import Leaderboard from './pages/Leaderboard.js';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<UserLogin />} />
          <Route path="/home" element={<Home />} />

          <Route path="/users/all" element={<ProfileList />} />
          <Route path="users/:id/edit" element={<UserForm />} />
          <Route path="/users/upload" element={<Upload />} />
          <Route path="/users/leaderboard" element={<Leaderboard />} />

          {/* old paths from previous assignments */}
          {/* <Route path= "/users" element = {<UserList/>}/> */}
          {/* <Route path = "/users/:id" element = {<UserDetail/>}/> */}
          {/* <Route path = "/users/new" element = {<UserForm/>}/> */}

        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
