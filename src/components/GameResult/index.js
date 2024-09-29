import {
  GameResultContainer,
  ResultImagesContainer,
  ImageTextContainer,
  ResultText,
  ResultImage,
  ResultFinalText,
  PlayAgainButton,
} from './styledComponents'

const GameResult = props => {
  const {myChoice, opponentChoice, resultMessage, playAgain} = props
  const {id, imageUrl} = opponentChoice
  const onClickingPlayAgainButton = () => {
    playAgain()
  }
  return (
    <GameResultContainer>
      <ResultImagesContainer>
        <ImageTextContainer>
          <ResultText>YOU</ResultText>
          <ResultImage src={myChoice[1]} alt="your choice" />
        </ImageTextContainer>
        <ImageTextContainer>
          <ResultText>OPPONENT</ResultText>
          <ResultImage src={imageUrl} alt="opponent choice" />
        </ImageTextContainer>
      </ResultImagesContainer>
      <ResultFinalText>{resultMessage}</ResultFinalText>
      <PlayAgainButton onClick={onClickingPlayAgainButton}>
        Play Again
      </PlayAgainButton>
    </GameResultContainer>
  )
}

export default GameResult
