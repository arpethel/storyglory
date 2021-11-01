import React from "react";
import Signup from "./auth/Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./auth/Profile";
import CreateStory from "./story-drive/CreateStory";
import Login from "./auth/Login";
import PrivateRoute from "./auth/PrivateRoute";
import ForgotPassword from "./auth/ForgotPassword";
import UpdateProfile from "./auth/UpdateProfile";
import Dashboard from "./story-drive/Dashboard";
import Stories from "./Stories";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Story Drive */}
          <PrivateRoute exact path="/" component={Dashboard}/>
          <PrivateRoute path="/add" component={CreateStory} />
          <PrivateRoute path="/stories" component={Stories} />
          <PrivateRoute exact path="/folder/:folderId" component={Dashboard}/>

          {/* User Profile */}
          <PrivateRoute path="/user" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />

          {/* Authentication */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
