import styled from "styled-components"

const Link = styled.a`
  display: inline-block;
  color: var(--primary);
  padding: 5px 10px;
  border: 1px solid var(--primary);
  text-align: center;
  font-size: 14px;
  border-radius: 5px;
  -webkit-transition: 0.2s ease-in-out all;
  transition: 0.2s ease-in-out all;

  &:hover {
    background-color: var(--primary);
    color: #fff;
  }
`

export default Link
