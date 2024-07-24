// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamArr: [], isLoading: true}

  componentDidMount() {
    this.getArr()
  }

  getArr = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const {teams} = data

    const sendData = teams.map(eachValue => ({
      id: eachValue.id,
      name: eachValue.name,
      teamImgUrl: eachValue.team_image_url,
    }))

    this.setState({teamArr: sendData, isLoading: false})
  }

  render() {
    const {teamArr, isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className="bg-container">
            <div className="text-container">
              <img
                className="logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="main-heading">IPL Dashboard</h1>
            </div>
            <ul className="list-prop">
              {teamArr.map(eachValue => (
                <TeamCard key={eachValue.id} eachValue={eachValue} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default Home
