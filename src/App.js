import { Switch, Route } from 'react-router-dom';
import { MainNav } from 'components/mainNav/MainNav';
import { MainContainer } from 'components/mainContainer/MainContainer';
import { FindSection } from 'components/findSection/FindSection';
import { FilmMainView } from 'views/filmMainView/FilmMainView';
import { FilmMainCast } from 'views/filmMainCast/FilmMainCast';
import { FilmMainReviews } from 'views/filmMainReviews/FilmMainReviews';

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
        <Route path="/movies/:filmId">
          <FilmMainView />
          <Switch>
            <Route path="/movies/:filmId/cast">
              <FilmMainCast />
            </Route>
            <Route path="/movies/:filmId/reviews">
              <FilmMainReviews />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
