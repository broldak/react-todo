import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 8px 0;
`;

const TodoListItems = () => {
  const items = [
    { title: 'item 1' },
    { title: 'item 2' },
    { title: 'item 3' }
  ];

  const listItems = items.map((item) =>
    <li key={item.toString()}>
      <TodoListItem {...item} />
    </li>
  );

  return (
    <List>
      {listItems}
    </List>
  )
}

export default TodoListItems;