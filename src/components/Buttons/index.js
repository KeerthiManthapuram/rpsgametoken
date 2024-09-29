import {ButtonLiItem, CustomButton, ImageItem} from './styledComponents'

const Buttons = props => {
  const {buttonItemDetails, onGetId} = props
  const {id, imageUrl} = buttonItemDetails
  const lowerCaseObj = id.toLowerCase()
  const onClickingButton = () => {
    onGetId(id, imageUrl)
  }
  return (
    <ButtonLiItem>
      <CustomButton
        type="button"
        onClick={onClickingButton}
        data-testid={`${lowerCaseObj}Button`}
      >
        <ImageItem src={imageUrl} alt={id} />
      </CustomButton>
    </ButtonLiItem>
  )
}

export default Buttons
