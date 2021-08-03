import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

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

  const onSubmitHeandler = e => {
    e.preventDefault();
    const inputData = e.target.elements.filmName.value;
    if (inputData) {
      setFindingData(inputData);
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
              <Link to={`${url}/${film.id}`}>{film.original_title}</Link>
            </FilmListItem>
          ))}
        </FilmList>
      )}
    </FormContainer>
  );
}
