import styled from "styled-components";

type HeaderProps = {
  className?: string
}

const Heading = styled.h1`
  font-weight: 600;
  font-size: 36px;
  text-align: center;
`;

const TodoListHeader = ({ className }: HeaderProps) => {
  return (
    <Heading className={className}>
      Todo List
    </Heading>
  )
}

export default TodoListHeader;