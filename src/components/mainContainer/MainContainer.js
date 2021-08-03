import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getFilmsData } from 'utils/getFilmsData';
import {
  ContentSection,
  MovieList,
  MovieListItem,
} from './MainContainer.style';

export function MainContainer() {
  const [filmsData, setFilmsData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getFilmsData().then(response => {
      setFilmsData(response.data.results);
    });
  }, []);

  return (
    <ContentSection>
      <MovieList>
        {filmsData.map(film => {
          return (
            <MovieListItem key={film.id}>
              <Link to={{ pathname: `/movies/${film.id}`, state: { from: location } }}>{film.original_title}</Link>
            </MovieListItem>
          );
        })}
      </MovieList>
    </ContentSection>
  );
}
