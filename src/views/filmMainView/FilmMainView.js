import { useState, useEffect } from 'react';
import { useParams, Link, useRouteMatch, useLocation } from 'react-router-dom';
import { getFilmById } from 'utils/getFilmsData';

import {
  SectionWrapper,
  BackButton,
  MainFilmLogo,
  MainFilmHeader,
  TextContent,
  SectionList,
  SectionListItem,
} from 'views/filmMainView/FilmMainView.style';

export function FilmMainView() {
  const [filmCardData, setFilmCardData] = useState(null);
  const { filmId } = useParams();
  const { url } = useRouteMatch();
  const location = useLocation();

  // const goBackHandle = (e) => {



  // };

  useEffect(() => {
    getFilmById(filmId).then(movieResp => setFilmCardData(movieResp.data));
    return () => { };
  }, [filmId]);

  return (
    filmCardData && (
      <>
        <BackButton>← Go back</BackButton>
        <SectionWrapper className="movie-card">
          <MainFilmLogo
            src={`https://image.tmdb.org/t/p/w500${filmCardData.poster_path}`}
            alt={`${filmCardData.original_title} poster`}
          />
          <SectionWrapper className="description-section">
            <MainFilmHeader>{filmCardData.original_title}</MainFilmHeader>
            <TextContent>User Score: {filmCardData.popularity}%</TextContent>
            <TextContent className="overwiew-title">Overwiew</TextContent>
            <TextContent>{filmCardData.overview}</TextContent>
            <TextContent className="genres-title">Genres</TextContent>
            <SectionList className="genres-list">
              {filmCardData.genres.map(genre => {
                return (
                  <SectionListItem key={genre.id} className="genres-list-item">
                    {genre.name}
                  </SectionListItem>
                );
              })}
            </SectionList>
          </SectionWrapper>
        </SectionWrapper>
        <SectionWrapper className="additional-section">
          <TextContent>Additional information</TextContent>
          <SectionList>
            <SectionListItem>
              <Link to={`${url}/cast`}>Cast</Link>
            </SectionListItem>
            <SectionListItem>
              <Link to={`${url}/reviews`}>Reviews</Link>
            </SectionListItem>
          </SectionList>
        </SectionWrapper>
      </>
    )
  );
}
