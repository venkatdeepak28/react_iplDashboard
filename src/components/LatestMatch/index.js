// Write your code here
const LatestMatch = props => {
  const {recentMatch} = props

  const {umpires, result, manOfTheMatch, date, venue} = recentMatch
  const {competingTeam, competingTeamLogo, firstInnings} = recentMatch
  const {secondInnings} = recentMatch

  return (
    <div className="latest-match-container">
      <div className="latest-match-text-container">
        <p className="matches-heading">{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        className="latest-match-logo"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div className="latest-match-text-container right-side">
        <p className="matches-heading">First Innings</p>
        <p>{firstInnings}</p>
        <p className="matches-heading">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="matches-heading">Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p className="matches-heading">Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
