import styled from "styled-components";

type ItemProps = {
  title: string;
}

const Item = styled.div`
  padding: 8px 16px;
  display: flex;
`;

const Input = styled.input`
  margin-right: 8px;
  margin-left: 0;
`;

const TodoListItem = ({ title }: ItemProps) => {
  return (
    <Item>
      <Input type="checkbox" />
      <p>{title}</p>
    </Item>
  );
}

export default TodoListItem;