import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  width: 100%;
  box-shadow: 0px 3px 2px 1px rgba(0, 0, 255, 0.15);
`;

export const NavSection = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 50px;
  margin-left: 50px;
  margin-bottom: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #000000;
  margin-right: 25px;
  font-weight: 600;
  text-decoration: none;
  &.active {
    color: #ff0000;
  }
`;
