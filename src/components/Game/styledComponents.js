import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 23vh;
  width: 70vw;
  border: #ffffff 1px solid;
  border-radius: 10px;
  padding: 10px;
  background-color: transparent;
  margin: 20px;
`

export const GameTitle = styled.h1`
  list-style-type: none;
  color: #ffffff;
  font-family: 'bree serif';
  font-size: 22px;
`
export const ScoreCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 130px;
  background-color: #ffffff;
  border: none;
  border-radius: 6px;
  marign: 15px;
`
export const ScorePara = styled.p`
  color: #223a5f;
  font-family: 'bree serif';
  font-size: 17px;
  font-weight: 300;
  margin-bottom: 0px;
`
export const Score = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  margin-top: 0px;
`
export const ButtonsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  width: 100%;
  height: 50vh;
`
export const RulesImage = styled.img`
  height: 50vh;
  width: 55vw;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`
export const PopupButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  height: 50px;
  width: 90px;
  border-radius: 6px;
  color: #000000;
  font-size: 30px;
  font-family: 'Roboto';
  margin: 10px;
`
export const RulesImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 65vh;
  width: 70vw;
  background-color: #ffffff;
`
export const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  height: 50px;
  width: 50px;
  margin: 10px;
  background-color: transparent;
  align-self: flex-end;
`
