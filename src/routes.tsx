import {
   BrowserRouter,
   Switch,
   Route
} from "react-router-dom";
import HomeView from "./views/HomeView";
import NotFoundView from "./views/NotFoundView";

const Routes = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={HomeView} />


            <Route path="*" component={NotFoundView} />
         </Switch>
      </BrowserRouter>
   )
}

export default Routes;