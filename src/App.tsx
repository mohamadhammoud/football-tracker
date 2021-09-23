import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import ViewHeader from './Components/Header/ViewHeader';
import ViewCountryLeagues from './Components/CountriesLeagues/ViewCountryLeagues';
import ViewLeagueStanding from './Components/LeaguesStanding/ViewLeagueStanding';
import ViewTeamInformation from './Components/TeamInformation/ViewTeamInformation';
import ViewPlayerInfo from './Components/PlayerInfo/ViewPlayerInfo';


function App() {

  const [events, setEvents] = useState([]);

  const requestEvents = async () => {

    // const [error, data] = await getAllEvents();

    // if (error) {
    //   message.error("sorry we had an error, we'll try again.");
    //   //   requestEvents();
    // }
    // setEvents(data);
  }

  useEffect(() => {
    requestEvents();
  }, []);
  return (
    <>
      <ViewHeader />
      <Router>
        <Switch>
          <Route path="/playerinfo/:playerId" exact>
            <ViewPlayerInfo />
          </Route>
          <Route path="/standings/:id" exact>
            <ViewLeagueStanding />
          </Route>
          <Route path="/teaminfo/:teamId" exact>
            <ViewTeamInformation />
          </Route>
          <Route path="/">
            <ViewCountryLeagues />
          </Route>
        </Switch>
      </Router>
    </>);
}

export default App;


