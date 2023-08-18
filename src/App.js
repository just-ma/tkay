import { styled } from "styled-components";

import background1 from "./images/background1.jpg";
import background2 from "./images/background2.jpg";
import background3 from "./images/background3.jpg";
import background4 from "./images/background4.jpg";
import titleSrc from "./images/title.png";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
`;

const Column = styled.div`
  flex: 1 0;
`;

const BackgroundImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;

const TitleImg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 60%;
`;

function App() {
  return (
    <Page>
      <Column>
        <BackgroundImg src={background1} alt="background1" />
      </Column>
      <Column>
        <BackgroundImg src={background2} alt="background2" />
      </Column>
      <Column>
        <BackgroundImg src={background3} alt="background3" />
      </Column>
      <Column>
        <BackgroundImg src={background4} alt="background4" />
      </Column>
      <TitleImg src={titleSrc} alt="title" />
    </Page>
  );
}

export default App;
