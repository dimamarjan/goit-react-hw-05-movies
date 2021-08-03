import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFilmsData } from 'utils/getFilmsData';
import {
  ContentSection,
  MovieList,
  MovieListItem,
} from './MainContainer.style';

export function MainContainer() {
  const [filmsData, setFilmsData] = useState([]);

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
              <Link to={`/movies/${film.id}`}>{film.original_title}</Link>
            </MovieListItem>
          );
        })}
      </MovieList>
    </ContentSection>
  );
}
