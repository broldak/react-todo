import styled from "styled-components";
import TodoListItems from "./TodoListItems";

const Container = styled.div`
  border-radius: 2px;
  border: 1px solid #ccc;
  background-color: #fafafa;
  width: 100%;
`;

const Input = styled.input`
  border: 0;
  border-radius: 0;
  vertical-align: top;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  font-size: 14px;
`;

const TodoListBody = () => {
  return (
    <Container>
      <Input type="text" placeholder="Enter todo title here..." />
      <TodoListItems />
    </Container>
  );
}

export default TodoListBody;