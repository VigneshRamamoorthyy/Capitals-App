import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCapitalState: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeCapitalState: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalState} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalState,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {activeCapitalState} = this.state
    const country = this.getCountry(activeCapitalState)
    return (
      <div className="app-container">
        <div className="capital-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="capital-select"
              onChange={this.onChangeCapital}
              value={activeCapitalState}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  className="value"
                  value={eachCapital.id}
                  key={eachCapital.id}
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
