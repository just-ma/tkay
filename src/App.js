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

const Column = styled.a`
  flex: 1 0;
  position: relative;
  cursor: pointer;

  &:hover ${BackgroundImg} {
    opacity: 1;
  }

  &:link {
    text-decoration: none;
  }
`;

const ColumnContent = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const TitleContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 60%;
  pointer-events: none;
`;

const TitleImg = styled.img`
  animation: float 15s ease-in-out infinite;
  width: 100%;

  @keyframes float {
    from {
      transform: rotate(0deg) translateX(10px) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(10px) rotate(-360deg);
    }
  }
`;

const BackgroundCol = ({ column: { src, content, link } }) => {
  return (
    <Column href={link} target="_blank" rel="noopener noreferrer">
      <ColumnContent>{content}</ColumnContent>
      <BackgroundImg src={src} draggable={false} />
    </Column>
  );
};

function App() {
  return (
    <Page>
      {COLUMNS.map((column, index) => (
        <BackgroundCol column={column} key={index} />
      ))}
      <TitleContainer>
        <TitleImg src={titleSrc} alt="title" />
      </TitleContainer>
    </Page>
  );
}

export default App;
