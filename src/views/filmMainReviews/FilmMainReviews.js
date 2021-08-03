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
  const [filmReviews, setFilmReviews] = useState(null);
  const [showFilmsList, setShowFilmsList] = useState(false);
  const [showNoReviews, setShowNoReviews] = useState(false);
  const { filmId } = useParams();

  useEffect(() => {
    getFilmReviews(filmId).then(reviewsResponse => {
      const recData = reviewsResponse.data.results;
      if (recData.length === 0) {
        setShowNoReviews(true);
        return;
      } else {
        setFilmReviews(recData);
        setShowFilmsList(true);
      }
    });
  }, [filmId]);

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
