import styled from 'styled-components'

export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const ImageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ResultText = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
`
export const ResultImage = styled.img`
  height: 100px;
  width: 100px;
  margin: 15px;
`
export const ResultFinalText = styled.p`
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
`
export const PlayAgainButton = styled.button`
  border: none;
  height: 80px;
  min-width: 100px;
  border-radius: 8px;
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 25px;
  outline: none;
  cursor: pointer;
`
