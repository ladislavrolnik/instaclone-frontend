import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useReactiveVar } from '@apollo/client';
import {
  darkModeVar,
  disableDarkMode,
  enableDarkMode
} from '../../screens/apollo';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const Footer = styled.footer`
  margin-top: 20px;
`;

const DarkModeBtn = styled.span`
  cursor: pointer;
`;

function AuthLayout({ children }) {
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
      <Footer>
        <DarkModeBtn>
          <FontAwesomeIcon
            onClick={darkMode ? disableDarkMode : enableDarkMode}
            icon={darkMode ? faSun : faMoon}
          />
        </DarkModeBtn>
      </Footer>
    </Container>
  );
}

export default AuthLayout;
