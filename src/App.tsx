import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'
import TodoList from './components/TodoList';

type AppProps = {
  greeting: string;
}

// Global styles
const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
    height: 100vh; 
  }

  html,
  body,
  input {
    font-family: 'Noto Sans JP', sans-serif;
  }
`;

const AppContainer = styled.div`
  height: 100%;
  background-color: #f5f1ed;
  padding: 24px;
  box-sizing: border-box;
`;

const App = (props: AppProps) => {
  return (
    <AppContainer>
        <GlobalStyle />
        <TodoList />
    </AppContainer>
  );
}

export default App;
