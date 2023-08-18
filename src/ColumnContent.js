import { styled } from "styled-components";

import background1 from "./images/background1.jpg";
import background2 from "./images/background2.jpg";
import background3 from "./images/background3.jpg";
import background4 from "./images/background4.jpg";

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 0;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  transform: scaleX(1.6);
  transform-origin: top left;
`;

const COLUMNS = [
  {
    src: background1,
    content: (
      <Content>
        <Title>PRE-ORDER</Title>
        Out November 3rd
      </Content>
    ),
  },
  {
    src: background2,
    content: (
      <Content>
        <Title>PRE-ORDER</Title>
        Out November 3rd
      </Content>
    ),
  },
  {
    src: background3,
    content: (
      <Content>
        <Title>PRE-ORDER</Title>
        Out November 3rd
      </Content>
    ),
  },
  {
    src: background4,
    content: (
      <Content>
        <Title>PRE-ORDER</Title>
        Out November 3rd
      </Content>
    ),
  },
];

export default COLUMNS;
