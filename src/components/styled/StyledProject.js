import styled from "styled-components"

export const Item = styled.div`
  width: calc(50% - 20px);
  margin: 10px;
  border: 1px solid var(--primary);
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`
