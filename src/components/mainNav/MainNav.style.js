import styled from '@emotion/styled';

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 3px 2px 1px rgba(0, 0, 255, 0.15);
`;

export const NavSection = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 50px;
  margin-left: 50px;
`;

export const NavLink = styled.a`
  margin-right: 25px;
  font-weight: 600;
`;
