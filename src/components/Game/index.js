import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import Buttons from '../Buttons'

import GameResult from '../GameResult'

import {
  AppContainer,
  HeaderSection,
  GameTitle,
  ScoreCard,
  ScorePara,
  Score,
  ButtonsContainer,
  RulesImage,
  PopupContainer,
  PopupButton,
  RulesImageContainer,
  CloseButton,
} from './styledComponents'

class Game extends Component {
  state = {
    showResult: false,
    myChoice: {},
    opponentChoice: {},
    score: 0,
    resultMessage: '',
  }

  onClickingPlayAgain = () => {
    this.setState({
      showResult: false,
    })
  }

  renderGameResultView = () => {
    const {myChoice, opponentChoice, resultMessage} = this.state
    return (
      <GameResult
        myChoice={myChoice}
        opponentChoice={opponentChoice}
        resultMessage={resultMessage}
        playAgain={this.onClickingPlayAgain}
      />
    )
  }

  onGetButtonId = (id, imageUrl) => {
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * choicesList.length)
    if (choicesList[randomNumber].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[randomNumber],
        resultMessage: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (choicesList[randomNumber].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[randomNumber],
        resultMessage: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else if (choicesList[randomNumber].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[randomNumber],
        resultMessage: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (choicesList[randomNumber].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[randomNumber],
        resultMessage: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else if (choicesList[randomNumber].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[randomNumber],
        resultMessage: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (choicesList[randomNumber].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[randomNumber],
        resultMessage: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else {
      this.setState({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[randomNumber],
        resultMessage: 'IT IS DRAW',
      })
    }
  }

  renderHeaderSection = () => {
    const {score} = this.state
    return (
      <HeaderSection>
        <GameTitle>
          ROCK <br />
          PAPER <br />
          SCISSORS
        </GameTitle>
        <ScoreCard>
          <ScorePara>Score</ScorePara>
          <Score>{score}</Score>
        </ScoreCard>
      </HeaderSection>
    )
  }

  renderButtonsContainer = () => {
    const {choicesList} = this.props
    return (
      <ButtonsContainer>
        {choicesList.map(eachButton => (
          <Buttons
            key={eachButton.id}
            buttonItemDetails={eachButton}
            onGetId={this.onGetButtonId}
          />
        ))}
      </ButtonsContainer>
    )
  }

  renderPopupContainer = () => {
    const {score} = this.state
    return (
      <PopupContainer>
        <Popup modal trigger={<PopupButton type="button">Rules</PopupButton>}>
          {close => (
            <RulesImageContainer>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine size="30" />
              </CloseButton>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </RulesImageContainer>
          )}
        </Popup>
      </PopupContainer>
    )
  }

  render() {
    const {showResult} = this.state
    return (
      <AppContainer>
        {this.renderHeaderSection()}
        {showResult
          ? this.renderGameResultView()
          : this.renderButtonsContainer()}
        {this.renderPopupContainer()}
      </AppContainer>
    )
  }
}

export default Game
