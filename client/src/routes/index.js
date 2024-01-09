import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import Layout from "../Layout/Layout";
import Home from "../components/Home";
import CreatePost from "../components/post/CreatePost";
import UserProfile from "../components/user/UserProfile";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="createPost" element={<CreatePost />} />
        <Route path="profile" element={<UserProfile />} />
      </Route>
    </Route>
  )
);

export default routes;

/**
 *   MAIN: http://localhost:3000/
 *   login: Main/login
 *   signup: Main/signup
 *   home: Main/
 *   createPost: Main/createPost
 *   profile: Main/profile
 */
