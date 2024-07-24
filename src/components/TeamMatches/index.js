// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import MatchCard from '../MatchCard'

import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {teamArr: [], isLoading: true, recentMatch: [], teamBannerUrl: ''}

  componentDidMount() {
    this.getObj()
  }

  getObj = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const latestMatch = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }

    const sendArr = data.recent_matches.map(eachValue => ({
      umpires: eachValue.umpires,
      result: eachValue.result,
      manOfTheMatch: eachValue.man_of_the_match,
      id: eachValue.id,
      date: eachValue.date,
      venue: eachValue.venue,
      competingTeam: eachValue.competing_team,
      competingTeamLogo: eachValue.competing_team_logo,
      firstInnings: eachValue.first_innings,
      secondInnings: eachValue.second_innings,
      matchStatus: eachValue.match_status,
    }))

    this.setState({
      teamArr: sendArr,
      recentMatch: latestMatch,
      isLoading: false,
      teamBannerUrl: data.team_banner_url,
    })
  }

  render() {
    const {teamArr, isLoading, recentMatch, teamBannerUrl} = this.state

    const {match} = this.props
    const {params} = match
    const {id} = params

    const filteredArr = teamArr.slice(0, 6)

    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className={`"bg-container" ${id}`}>
            <div className="banner-container">
              <img className="banner" src={teamBannerUrl} alt="team banner" />
            </div>
            <p className="matches-para">Latest Matches</p>
            <ul>
              <LatestMatch key={recentMatch.id} recentMatch={recentMatch} />
            </ul>
            <ul className="recent-list-prop">
              {filteredArr.map(eachValue => (
                <MatchCard key={eachValue.id} eachValue={eachValue} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
