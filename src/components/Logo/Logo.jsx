import { FiFilm } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { LogoStyled, LogoText } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoStyled to="/" end>
      <IconContext.Provider value={{ size: '1.5em' }}>
        <FiFilm />
      </IconContext.Provider>

      <LogoText className="logo__title">Filmoteka</LogoText>
    </LogoStyled>
  );
};
