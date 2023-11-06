import styled from "styled-components"

const Title = styled.h2`
  position: relative;
  margin-bottom: 50px;
  font-weight: 700;
  font-family: var(--font);
  text-align: center;
  text-transform: uppercase;
  &::before {
    content: "";
    width: 25px;
    height: 5px;
    background-color: var(--primary);
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 3px;
  }
`
export default Title
