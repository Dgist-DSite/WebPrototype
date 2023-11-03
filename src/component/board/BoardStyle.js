import {styled} from 'styled-components';

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  border: 1.5px solid #D0D7DE;
  margin: 0.5rem;
  cursor: pointer;
`;

export const BoardImage = styled.img`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  // background-image: url(${(props) => props.image});
`
export const BoardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-wrap: wrap;
  text-align: left;
  padding-left: 20px;
`

export const BoardUserContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 16px 0 4px 16px;
`

export const BoardContentContainer = styled.div`
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-wrap: wrap;
  background: #f1f1f1;
  margin: 12px;
`

export const BoardThumbnale = styled.img`
  width: 100%;
  border-radius: 10px;
`

export const BoardDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  text-align: left;
  padding: 10px;
  position: absolute;
  width: 100%;
  background: #f1f1f1;
  bottom: 0;
  border-radius: 0 0 10px 10px;
`

export const TitleContainer = styled.div`
  margin-top: 4px;
`

export const BodyContainer = styled.div`
  color: #656D76;
`