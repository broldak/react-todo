import styled from 'styled-components';
import TodoListHeader from './TodoListHeader';
import TodoListBody from './TodoListBody';

const Container = styled.section`
  max-width: 700px;
  margin: 0 auto;
`;

const StyledHeader = styled(TodoListHeader)`
  margin-bottom: 24px;
`;

const TodoList = () => {
  return (
    <Container>
      <StyledHeader />
      <TodoListBody />
    </Container>
  )
}

export default TodoList;