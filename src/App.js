import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MainNav } from 'components/mainNav/MainNav';

const MainContainer = lazy(() => import('./components/mainContainer/MainContainer.js'));
const FindSection = lazy(() => import('./components/findSection/FindSection'));
const FilmMainView = lazy(() => import('./views/filmMainView/FilmMainView'));
const FilmMainCast = lazy(() => import('./views/filmMainCast/FilmMainCast'));
const FilmMainReviews = lazy(() => import('./views/filmMainReviews/FilmMainReviews'));

function App() {
  return (
    <div className="App">
      <MainNav />
      <Suspense fallback={<p>Loading</p>}>
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
      </Suspense>
      <Redirect to="/" />
    </div >
  );
}

export default App;
