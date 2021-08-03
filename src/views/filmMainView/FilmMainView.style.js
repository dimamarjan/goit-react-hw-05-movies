import styled from '@emotion/styled';

export const SectionWrapper = styled.div`
  &.movie-card {
    display: flex;
    margin-bottom: 5px;
  }
  &.description-section {
    margin-left: 20px;
  }
  &.additional-section {
    border-top: 2px solid #909090;
    border-bottom: 2px solid #909090;
  }
`;

export const BackButton = styled.button`
  margin-bottom: 10px;
`;

export const MainFilmLogo = styled.img`
  width: 320px;
`;

export const MainFilmHeader = styled.h1``;

export const TextContent = styled.p`
  &.overwiew-title {
    font-size: 22px;
    font-weight: 700;
  }
  &.genres-title {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const SectionList = styled.ul`
  &.genres-list {
    list-style: none;
    display: flex;
    padding: 0;
  }
`;

export const SectionListItem = styled.li`
  &.genres-list-item {
    :not(:last-child) {
      margin-right: 5px;
    }
  }
`;
