import {
   BrowserRouter,
   Switch,
   Route
} from "react-router-dom";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import NotFoundView from "./views/NotFoundView";
import ProfileView from "./views/ProfileView";

const Routes = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/login" component={LoginView} />
            <Route exact path="/profile" component={ProfileView} />

            <Route path="*" component={NotFoundView} />
         </Switch>
      </BrowserRouter>
   )
}

export default Routes;