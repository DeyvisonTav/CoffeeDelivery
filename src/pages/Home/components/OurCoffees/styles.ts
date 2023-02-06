import styled from "styled-components";

export const OurCoffeesContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`;

export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`;

export const SelectCoffeesSearch = styled.div`
  margin-top: 2rem;
  width: 14rem; 
  height: 2rem;



  select{
  
  width: 14rem; 
  height: 2rem;
  background: none;
  border-radius: 3px;
  padding: 0 0.75rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors["base-text"]};

  &::placeholder {
    color: ${({ theme }) => theme.colors["base-label"]};
  }
  }
`;
