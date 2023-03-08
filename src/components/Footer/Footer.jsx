import { AiFillHeart } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Container } from 'components/GlobalStyles.styled';
import { FooterStyled, Wrap } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <Wrap>
          <span>&copy; 2023 | All Rights Reserved |</span>
          <span>Developed with</span>
          <IconContext.Provider
            value={{ size: '1.4em', color: 'var(--color-accent)' }}
          >
            <AiFillHeart />
          </IconContext.Provider>
        </Wrap>
      </Container>
    </FooterStyled>
  );
};
