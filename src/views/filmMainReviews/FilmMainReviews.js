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
  const { filmId } = useParams();

  useEffect(() => {
    getFilmReviews(filmId).then(reviewsResponse =>
      setFilmReviews(reviewsResponse.data.results),
    );
  }, [filmId]);

  return (
    <>
      {filmReviews &&
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
    </>
  );
}
