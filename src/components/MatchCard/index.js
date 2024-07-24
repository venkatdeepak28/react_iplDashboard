// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachValue} = props

  const {competingTeam, result, competingTeamLogo, matchStatus} = eachValue

  console.log(matchStatus)

  return (
    <li className="recent-list-el">
      <img
        className="recent-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <h1 className="matches-heading">{competingTeam}</h1>
      <p className="matches-para">{result}</p>
      <p className={matchStatus === 'Won' ? 'won' : 'lost'}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
