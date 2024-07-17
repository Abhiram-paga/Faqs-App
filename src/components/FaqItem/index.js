import './index.css'

const FaqItem = props => {
  const {faqDetails, onToggleIcon} = props
  const {id, questionText, answerText, isAnswerShown} = faqDetails

  const onClickIcon = () => {
    onToggleIcon(id)
  }

  return (
    <li className="faq-list-item-container">
      <div className="question-icon-container">
        <h1 className="faq-heading">{questionText}</h1>
        <button type="button" onClick={onClickIcon} className="plus-btn">
          <img
            src={
              isAnswerShown
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
            alt={isAnswerShown ? 'minus' : 'plus'}
          />
        </button>
      </div>
      {isAnswerShown ? (
        <div className="answer-container">
          <hr />
          <p className="answer-text-para">{answerText}</p>
        </div>
      ) : null}
    </li>
  )
}
export default FaqItem
