import { useState } from "react";
import styled from "styled-components";

function Komisaris() {
    const [activeItem, setActiveItem] = useState(1);

    const data = [
        {
            id: 1,
            url: "/3.jpeg",
            name: "Writing Course",
            topicList: 100,
            shortName: "Komisaris Utama",
        },
        {
            id: 2,
            url: "/2.jpeg",
            name: "Coding Course",
            topicList: 120,
            shortName: "Komisaris",
        },

    ];

    const handleHover = (id) => {
        if (activeItem === id) {
            return;
        }
        setActiveItem(id);
    };

    const handleHoverLeave = () => {
        if (activeItem === 1) {
            return;
        }
        setActiveItem(1);
    };

    return (
        <>
        <AppContainer className="mx-auto">
            <Wrapper className="flex items-center justify-center min-h-screen">
                <ContainerWrapper className="bg-neutral-500">
                    <First>
                        <TextWrapper>
                            <Text className="text-6xl">Dewan</Text>
                            <Text className="text-6xl">Komisaris.</Text>
                        </TextWrapper>
                    </First>
                    <Container className="main px-10">
                        {data.map((o) => (
                            <ItemWrapper key={o.id}
                                onMouseOver={() => handleHover(o.id)}
                                onMouseLeave={() => handleHoverLeave(o.id)}
                                isActive={o.id === activeItem}
                            >
                                <Item
                                    style={{ backgroundImage: `url(${o.url})` }}
                                    isActive={o.id === activeItem}
                                >
                                    <ContentWrap1
                                        isActive={o.id === activeItem}
                                        isFirst={o.id === 1}
                                    >
                                        <CourseFullname>{o.name}</CourseFullname>
                                        <TopicListWrapper>
                                            <TopicItems>{o.topicList}</TopicItems>
                                            <TopicText>Topics</TopicText>
                                        </TopicListWrapper>
                                    </ContentWrap1>
                                    <ContentWrap2
                                        isActive={o.id === activeItem}
                                        isFirst={o.id === 1}
                                    >
                                        <ShortName>{o.shortName}</ShortName>
                                    </ContentWrap2>
                                </Item>
                            </ItemWrapper>
                        ))}
                    </Container>{" "}
                </ContainerWrapper>
            </Wrapper>
        </AppContainer>
    </>
    );
}

export default Komisaris;

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcfbfb;
`;
const Wrapper = styled.div`
  width: 1400px;
`;

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const First = styled.div`
  font-size: 40px;
  position: relative;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  min-width: 600px;
  max-width: 930px;
  width: calc(100% - 100px);
  height: 600px;
`;
const ItemWrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 150px;
  cursor: pointer;
  border-radius: 20px;
  padding: 0 20px;
  flex-grow: ${({ isActive }) => (isActive ? 4 : 1)};
  transition: all 0.6s ease;
`;

const Item = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-position: top;
  background-size: auto ${({ isActive }) => (isActive ? "120%" : "100%")};
  border-radius: 20px;
  transition: all 0.6s ease;
  overflow: hidden;
`;

const TextWrapper = styled.div`
  line-height: 80px;
  font-size: 80px;
  margin-top: 90px;
`;

const Text = styled.div`
  font-weight: 600;
`;

const ContentWrap1 = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 80px;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  padding: 0 40px;
  transition: all 0.6s ease;
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
`;

const CourseFullname = styled.div`
  font-size: 34px;
  color: #fff;
  font-weight: 600;
  word-break: keep-all;
  height: 100%;
  width: 10vw;
`;
const TopicListWrapper = styled.div`
  text-align: center;
  color: #fff;
`;
const TopicItems = styled.div`
  font-size: 52px;
  line-height: 1;
`;
const TopicText = styled.div`
  text-transform: uppercase;
`;

const ContentWrap2 = styled.div`
  width: 120px;
  height: 120px;
  background-color: #1e1e2f;
  color: #fff;
  position: absolute;
  left: 0;
  bottom: 60px;
  z-index: 1;
  transition: all 0.6s ease;
  opacity: ${({ isActive }) => (isActive ? "0" : "1")};
  /* display: ${({ isFirst }) => (isFirst ? "none" : "block")}; */
`;
const ShortName = styled.div`
  font-size: 34px;
  transform: rotate(-90deg);
`;
