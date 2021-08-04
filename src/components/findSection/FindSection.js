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

export function FindSection() {
  const [findingData, setFindingData] = useState(null);
  const [filmsList, setFilmsList] = useState([]);
  const [showFilms, setShowFilms] = useState(false);
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const onSubmitHeandler = e => {
    e.preventDefault();
    const inputData = e.target.elements.filmName.value;
    if (inputData) {
      setFindingData(inputData);
      history.push(`?q=${inputData}`)
    }
  };

  useEffect(() => {
    if (findingData) {
      getFilmByName(findingData).then(resp => {
        setFilmsList(resp.data.results);
      });
      if (filmsList.length !== 0) {
        setShowFilms(true);
      }
    }
  }, [filmsList.length, findingData, showFilms.length]);

  useEffect(() => {
    if (location?.state?.query) {
      setFindingData(location.state.query);
    };
  }, [location.state?.query]);

  return (
    <FormContainer>
      <FindForm onSubmit={onSubmitHeandler}>
        <InputField type="text" name="filmName" />
        <ButtonSubmit type="submit">Search</ButtonSubmit>
      </FindForm>
      {showFilms && (
        <FilmList>
          {filmsList.map(film => (
            <FilmListItem key={film.id}>
              <Link to={{ pathname: `${url}/${film.id}`, state: { from: location, query: findingData } }}>{film.original_title}</Link>
            </FilmListItem>
          ))}
        </FilmList>
      )}
    </FormContainer>
  );
}
