import {
   BrowserRouter,
   Switch,
   Route
} from "react-router-dom";
import HomeView from "./views/HomeView";

const Routes = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={HomeView} />
         </Switch>
      </BrowserRouter>
   )
}

export default Routes;