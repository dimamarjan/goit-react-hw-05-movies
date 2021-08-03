import { useState, useEffect } from 'react';
import defaultPhoto from 'images/default.jpg';

import { useParams } from 'react-router-dom';

import {
  ActorsSection,
  ActorPhoto,
  ActorsNameList,
  ActorsName,
  CharacterName,
} from 'views/filmMainCast/FilmMainCast.style';

import { getFilmCredits } from 'utils/getFilmsData';

export function FilmMainCast() {
  const [movieCast, setMovieCast] = useState(null);
  const { filmId } = useParams();

  useEffect(() => {
    getFilmCredits(filmId).then(castResponse =>
      setMovieCast(castResponse.data.cast),
    );
  }, [filmId]);

  return (
    <>
      {movieCast &&
        movieCast.map(actor => {
          return (
            <ActorsSection key={actor.cast_id}>
              <ActorPhoto
                width="100px"
                height="150px"
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                onError={({ target }) => (target.src = defaultPhoto)}
              />
              <ActorsNameList>
                <ActorsName>{actor.name}</ActorsName>
              </ActorsNameList>
              <CharacterName>Character: {actor.character}</CharacterName>
            </ActorsSection>
          );
        })}
    </>
  );
}
