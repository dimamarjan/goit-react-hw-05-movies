import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getFilmReviews } from 'utils/getFilmsData';

import {
  ReviewsContainer,
  ReviewsList,
  ReviewsListItem,
  ReviewsText,
} from 'views/filmMainReviews/FilmMainReviews.style';

export function FilmMainReviews() {
  const [filmReviews, setFilmReviews] = useState([]);
  const [showFilmsList, setShowFilmsList] = useState(false);
  const [showNoReviews, setShowNoReviews] = useState(false);
  const { filmId } = useParams();

  useEffect(() => {
    getFilmReviews(filmId).then(reviewsResponse =>
      setFilmReviews(reviewsResponse.data.results),
    );
  }, [filmId]);

  useEffect(() => {
    if (filmReviews.length !== 0) {
      setShowNoReviews(false);
      setShowFilmsList(true);
    } else {
      setShowFilmsList(false);
      setShowNoReviews(true);
    }
  }, [filmReviews.length, showNoReviews]);

  return (
    <>
      {showFilmsList &&
        filmReviews.map(review => {
          return (
            <ReviewsContainer key={review.id}>
              <ReviewsList>
                <ReviewsListItem>{review.author}</ReviewsListItem>
              </ReviewsList>
              <ReviewsText>{review.content}</ReviewsText>
            </ReviewsContainer>
          );
        })}
      {showNoReviews && (
        <ReviewsContainer className="no-reviews">
          We don't have any reviews for this movie.
        </ReviewsContainer>
      )}
    </>
  );
}
