import { NavSection, NavLink, NavContainer } from './MainNav.style';

export function MainNav() {
  return (
    <NavContainer>
      <NavSection>
        <NavLink>Home</NavLink>
        <NavLink>Movie</NavLink>
      </NavSection>
    </NavContainer>
  );
}
