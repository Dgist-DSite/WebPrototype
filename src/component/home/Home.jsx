import {Constant} from "../../util/Constant";
import {DefaultButton, SelectButtonStyle} from "../common/ButtonStyle";
import {Body, Title} from "../common/TextStyle";
import Modal from "../modal/Modal";
import Detail from "../detail/Detail";
import Board from "../board/Board";
import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getBoards, getBoardsByCategory} from "../../service/Service";
import {getTimeAgo} from "../../util/Time";
import {ButtonContainer, MainContainer, SettingContainer} from "./HomeStyle";


const dummyList = [
  // {
  //   userName: "test",
  //   image: "",
  //   url: "http://google.com",
  //   content: "content"
  // }
]

export default function Home() {

  const [list, setList] = useState(dummyList);
  const [clickedBoard, setClickedBoard] = useState(null);
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [boardModalOpen, setBoardModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('전체');

  useEffect(() => {
    // TODO : getNews
    // getNews()
    //   .then(() => {
    //
    //   })
  }, []);

  useEffect(() => {
    getAllBoard();
  }, []);

  function handlePostModalClose() {
    setPostModalOpen(false);
    getAllBoard();
  }

  function handleBoardModalClose() {
    setBoardModalOpen(false)
    getAllBoard();
  }

  function handleClickBoard(board) {
    setClickedBoard(board);
    setBoardModalOpen(true);
  }

  function getAllBoard() {
    getBoards()
      .then((i) => {
        const lst = i.data.data;
        registerBoard(lst);
      })
      .catch(e => {

      });
  }

  function handleCategory(i) {
    setSelectedCategory(i);
    if (i === '전체') {
      getAllBoard();
    } else {
      getBoardsByCategory(i)
        .then((r) => {
          registerBoard(r.data.data);
        })
        .catch((e) => {
          registerBoard([]);
        });
    }
  }

  function registerBoard(boards) {
    boards.forEach((i) => {
      const current = new Date() - 32400000; // 9시간
      const regDate = new Date(i.regDate);
      i.regDate = getTimeAgo(current, regDate);
    });
    setList(boards);
  }

  return (

    <MainContainer>
      <ButtonContainer>
        <Modal isOpen={postModalOpen} setIsOpen={handlePostModalClose} content={
          <Post close={() => {
            handlePostModalClose()
          }
          }/>}>
          <DefaultButton style={{
          }} onClick={() => setPostModalOpen(true)}>
            <Title>블로그 공유</Title>
          </DefaultButton>
        </Modal>
      </ButtonContainer>
      <SettingContainer>
        {["전체", ...Constant.categoryList].map((i) => (
          <SelectButtonStyle onClick={() => handleCategory(i)}>
            {selectedCategory === i
              ? <Body style={{fontWeight: 'bold', color: '#f68809'}}>{i}</Body>
              : <Body>{i}</Body>}
          </SelectButtonStyle>
        ))}
      </SettingContainer>

      <Modal isOpen={boardModalOpen} setIsOpen={handleBoardModalClose} content={
        <Detail model={clickedBoard} close={() => {
          handleBoardModalClose();
        }
        }/>}>
      </Modal>
      <li>
        {/*<DisplayAds/>*/}
        {/*<DisplayAds/>*/}
        {/*<DisplayAds/>*/}
        {/*<DisplayAds/>*/}
        {list.map((i) =>
          <ul>
            {<Board callback={() => handleClickBoard(i)} model={i}/>}
          </ul>
        )}
      </li>


    </MainContainer>
  )
}