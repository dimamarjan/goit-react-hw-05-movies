import { NavSection, StyledNavLink, NavContainer } from './MainNav.style';

export function MainNav() {
  return (
    <NavContainer>
      <NavSection>
        <StyledNavLink to="/" exact>
          Home
        </StyledNavLink>
        <StyledNavLink to="/movies">Movie</StyledNavLink>
      </NavSection>
    </NavContainer>
  );
}
