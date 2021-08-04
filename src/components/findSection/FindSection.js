import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';

import {
  FormContainer,
  FindForm,
  InputField,
  ButtonSubmit,
  FilmList,
  FilmListItem,
} from './FindSection.style';

import { getFilmByName } from 'utils/getFilmsData';

function FindSection() {
  const [findingData, setFindingData] = useState("");
  const [filmsList, setFilmsList] = useState([]);
  const [showFilms, setShowFilms] = useState(false);
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const onSubmitHeandler = e => {
    e.preventDefault();
    if (findingData !== "") {
      getFilmByName(findingData).then(resp => {
        setFilmsList(resp.data.results);
      });
    };
  };

  const onChangeHandler = ({ target }) => {
    setFindingData(target.value);
  };

  useEffect(() => {
    if (filmsList.length !== 0) {
      setShowFilms(true);
      history.push(`?q=${findingData}`);
    };
  }, [filmsList.length, findingData, history]);


  useEffect(() => {
    if (location?.state?.query) {
      setFindingData(location.state.query);
    };
    if (location?.state?.filmList) {
      setFilmsList(location.state.filmList);
    };
  }, [location.state?.query, location.state?.filmList]);

  return (
    <FormContainer>
      <FindForm onSubmit={onSubmitHeandler}>
        <InputField
          type="text"
          name="filmName"
          onChange={onChangeHandler}
          value={findingData}
        />
        <ButtonSubmit type="submit">Search</ButtonSubmit>
      </FindForm>
      {showFilms && (
        <FilmList>
          {filmsList.map(film => (
            <FilmListItem key={film.id}>
              <Link to={{ pathname: `${url}/${film.id}`, state: { from: location, query: findingData, filmList: filmsList } }}>{film.original_title}</Link>
            </FilmListItem>
          ))}
        </FilmList>
      )}
    </FormContainer>
  );
}

export default FindSection;