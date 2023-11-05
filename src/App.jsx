import {useEffect, useState} from "react";
import Board from "./component/board/Board";
import {
  AppContainer,
  ButtonContainer,
  LeftNav,
  MainContainer, ModalBackdrop, ModalContainer,
  NavContainer, RailContainer,
  RightNav,
  TitleContainer
} from "./AppStyle";
import {Body, LargeTitle, Title} from "./component/common/TextStyle";
import {dgsiteAxios, getNews, getBoards} from "./service/Service";
import {DefaultButton} from "./component/common/ButtonStyle";
import DisplayAds from "./component/adsense/DisplayAds";
import {getTimeAgo} from "./util/Time";
import Modal from "./component/modal/Modal";
import Post from "./component/post/Post";
import Rail from "./component/rail/Rail";
import Detail from "./component/detail/Detail";

function App() {
  const [list, setList] = useState([]);
  const [clickedBoard, setClickedBoard] = useState(null);
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [boardModalOpen, setBoardModalOpen] = useState(false);

  useEffect(() => {
    // TODO : getNews
    // getNews()
    //   .then(() => {
    //
    //   })
  }, []);


  useEffect(() => {
    getBoard();
  }, []);

  function getBoard() {
    getBoards()
      .then((i) => {
        const lst = i.data.data;
        lst.forEach((i) => {
          const current = new Date() - 32400000; // 9시간
          const regDate = new Date(i.regDate);
          i.regDate = getTimeAgo(current, regDate);
          console.log(i);
        });
        setList(lst);
      });
  }
  function handlePostModalClose() {
    setPostModalOpen(false);
    getBoard();
  }

  function handleBoardModalClose() {
    setBoardModalOpen(false)
    getBoard();
  }

  return (
    <AppContainer>
      <NavContainer>
        <LeftNav>
          <TitleContainer>
            <Title>DSite</Title>
          </TitleContainer>
        </LeftNav>
        <RightNav>
          <ButtonContainer>
            <Modal isOpen={postModalOpen} setIsOpen={handlePostModalClose} content={
              <Post close={() => {
                handlePostModalClose()
              }
              }/>}>
              <DefaultButton onClick={() => setPostModalOpen(true)}>
                <Body>블로그 공유</Body>
              </DefaultButton>
            </Modal>
          </ButtonContainer>
        </RightNav>
      </NavContainer>
      <RailContainer>
        <Rail text={'홈'}/>
        <Rail text={'로드맵'}/>
      </RailContainer>
      <MainContainer>
        <li>
          {/*<DisplayAds/>*/}
          {list.map((i) =>
            <ul>
              <Modal isOpen={boardModalOpen} setIsOpen={handleBoardModalClose} content={
                <Detail model={clickedBoard} close={() => {
                  handleBoardModalClose();
                }
                }/>}>
                {<Board callback={() => {
                  setClickedBoard(i);
                  setBoardModalOpen(true);
                }} model={i}/>}
              </Modal>
            </ul>
          )}
        </li>
      </MainContainer>

    </AppContainer>
  );
}

export default App;
