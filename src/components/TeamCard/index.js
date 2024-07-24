// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachValue} = props

  const {id, name, teamImgUrl} = eachValue

  console.log(eachValue)

  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="list-el">
        <img className="team-logo" src={teamImgUrl} alt={name} />
        <h1 className="main-heading extra">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
