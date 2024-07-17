import {Component} from 'react'

import FaqItem from '../FaqItem/index'

import './index.css'

class Faqs extends Component {
  state = {faqItemList: this.props.faqsList}

  onToggleIcon = id => {
    // const {faqItemList} = this.state
    this.setState(prevState => ({
      faqItemList: prevState.faqItemList.map(eachFaq => {
        if (id === eachFaq.id) {
          return {...eachFaq, isAnswerShown: !eachFaq.isAnswerShown}
        }
        return eachFaq
      }),
    }))
  }

  render() {
    const {faqItemList} = this.state
    return (
      <div className="whole-bg-container">
        <div className="inner-container">
          <h1 className="main-heading">FAQs</h1>
          <ul type="None" className="list-container">
            {faqItemList.map(eachFaq => (
              <FaqItem
                key={eachFaq.id}
                faqDetails={eachFaq}
                onToggleIcon={this.onToggleIcon}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
