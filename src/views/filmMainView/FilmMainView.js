import { useState, useEffect } from 'react';
import { useParams, Link, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import { getFilmById } from 'utils/getFilmsData';

import noPosterImage from "images/noPoster.jpg"

import {
  SectionWrapper,
  BackButton,
  MainFilmLogo,
  MainFilmHeader,
  TextContent,
  SectionList,
  SectionListItem,
} from 'views/filmMainView/FilmMainView.style';

function FilmMainView() {
  const [filmCardData, setFilmCardData] = useState(null);
  const [currentLocation, setCurrentLocation] = useState();
  const [queryHistory, setQueryHistory] = useState();
  const [historyState, setHistoryState] = useState();
  const { filmId } = useParams();
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();


  const onGoBackHandle = () => {
    if (currentLocation) {
      history.push({ pathname: currentLocation, search: queryHistory, state: historyState });
    } else {
      history.push(`/`);
    }
  };

  useEffect(() => {
    const locationUrl = location?.state?.from?.pathname;
    const searchQuery = location?.state?.from?.search;
    const locationHistoryState = location.state;
    if (locationUrl) {
      setCurrentLocation(locationUrl);
    };
    if (searchQuery) {
      setQueryHistory(searchQuery);
    };
    if (locationHistoryState) {
      setHistoryState(locationHistoryState);
    }
  }, [location.state, location.state?.from?.pathname, location.state?.from?.search])

  useEffect(() => {
    getFilmById(filmId).then(movieResp => setFilmCardData(movieResp.data)).catch(err => err);
    return () => { };
  }, [filmId]);


  return (
    filmCardData && (
      <>
        <BackButton onClick={onGoBackHandle}>← Go back</BackButton>
        <SectionWrapper className="movie-card">
          <MainFilmLogo
            width="320px"
            height="480px"
            src={`https://image.tmdb.org/t/p/w500${filmCardData.poster_path}`}
            alt={`${filmCardData.original_title} poster`}
            onError={({ target }) => (target.src = noPosterImage)}
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

export default FilmMainView;