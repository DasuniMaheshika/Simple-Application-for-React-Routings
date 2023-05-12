import { Route, Switch } from 'react-router-dom';
import AllMeetUpPage from "./pages/AllMeetUpPage";
import NewMeetUpPage from "./pages/NewMeetUpPage";
import FavouritePage from "./pages/FavouritePage";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div className="App">
<MainNavigation/>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUpPage />
        </Route>
        <Route path="/favourite">
          <FavouritePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
