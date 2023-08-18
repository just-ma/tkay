import { styled } from "styled-components";

import background1 from "./images/background1.jpg";
import background2 from "./images/background2.jpg";
import background3 from "./images/background3.jpg";
import background4 from "./images/background4.jpg";

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 0;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  transform: scaleX(1.8);
  transform-origin: top left;
  color: #baa997;
`;

const Subtitle = styled(Title)`
  font-size: 14px;
`;

const COLUMNS = [
  {
    src: background1,
    content: (
      <Content>
        <Title>ASSASSIN</Title>
      </Content>
    ),
    link: "https://www.youtube.com/watch?v=65gcu3ex_yg",
  },
  {
    src: background2,
    content: (
      <Content>
        <Title>RING-A-LING</Title>
      </Content>
    ),
    link: "https://www.youtube.com/watch?v=GFY2u1Bf6MU",
  },
  {
    src: background3,
    content: (
      <Content>
        <Title>PRE-ORDER</Title>
        <Subtitle>OUT NOV 3</Subtitle>
      </Content>
    ),
    link: "https://tkaymaidza.ffm.to/sweetjusticeuk",
  },
  {
    src: background4,
    content: (
      <Content>
        <Title>MAILING LIST</Title>
      </Content>
    ),
  },
];

export default COLUMNS;
