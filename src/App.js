import { Switch, Route } from 'react-router-dom';
import { MainNav } from 'components/mainNav/MainNav';
import { MainContainer } from 'components/mainContainer/MainContainer';
import { FindSection } from 'components/findSection/FindSection';

function App() {
  return (
    <div className="App">
      <MainNav />
      <Switch>
        <Route path="/" exact>
          <MainContainer />
        </Route>
        <Route path="/movies" exact>
          <FindSection />
        </Route>
        <Route path="/movies/:filmId"></Route>
      </Switch>
    </div>
  );
}

export default App;
