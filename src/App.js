import { styled } from "styled-components";

import titleSrc from "./images/title.png";
import COLUMNS from "./ColumnContent";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
`;

const BackgroundImg = styled.img`
  top: 0;
  left: 0;
  position: absolute;
  display: block;
  width: 100%;
  height: auto;
  opacity: 0;
`;

const Column = styled.div`
  flex: 1 0;
  position: relative;

  &:hover ${BackgroundImg} {
    opacity: 1;
  }
`;

const ColumnContent = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const TitleImg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 60%;
  pointer-events: none;
`;

const BackgroundCol = ({ src, children }) => {
  return (
    <Column>
      <ColumnContent>{children}</ColumnContent>
      <BackgroundImg src={src} draggable={false} />
    </Column>
  );
};

function App() {
  return (
    <Page>
      {COLUMNS.map(({ src, content }, index) => (
        <BackgroundCol src={src} key={index}>
          {content}
        </BackgroundCol>
      ))}
      <TitleImg src={titleSrc} alt="title" />
    </Page>
  );
}

export default App;
