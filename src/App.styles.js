import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  outline: none;
  border: 1px solid whitesmoke;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const List = styled.div`
  flex: 3;
`;
const Selected = styled.div`
  flex: 1;
`;

export { Wrapper, Title, Input, Container, List, Selected };
