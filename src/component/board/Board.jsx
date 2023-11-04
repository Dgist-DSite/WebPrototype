import {
  BoardContainer,
  BoardContentContainer, BoardDetail,
  BoardImage,
  BoardInfoContainer,
  BoardThumbnale,
  BoardUserContainer, BodyContainer, DetailBodyContainer, DetailLabelContainer, DetailTitleContainer, TitleContainer
} from "./BoardStyle";
import React from "react";
import {Body, Label, Title} from "../common/TextStyle";

export default function Board({ model }) {
  let url = new URL(model.url)

  return (
    <BoardContainer>
        <BoardUserContainer>
          <BoardImage src={"https://i.namu.wiki/i/EbJbfjm1JTDuv60L4JG11Fo27mXgNVvm2unFSzQ8ejK6kcDLNnhyRLYr2VoeO_akensh64iyoe0AGoqVR4Ucqw.webp"}/>
          <BoardInfoContainer>
            {/*<Label>{model.category}</Label>*/}
            <TitleContainer>
              <Title>{model.userName}</Title>
            </TitleContainer>
            <BodyContainer>
              <Body>{model.createdAt}</Body>
            </BodyContainer>
          </BoardInfoContainer>
        </BoardUserContainer>
        <BoardContentContainer href={model.url} target="_blank">
          <BoardThumbnale src={model.image}/>
          <BoardDetail>
            <DetailTitleContainer>
              <Title>{model.title}</Title>
            </DetailTitleContainer>
            <DetailBodyContainer>
              <Body>{model.description}</Body>
            </DetailBodyContainer>
            <DetailLabelContainer>
              <Label>{url.host}</Label>
            </DetailLabelContainer>
          </BoardDetail>
        </BoardContentContainer>
    </BoardContainer>
  )
}