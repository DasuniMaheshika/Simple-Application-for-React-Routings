import { Link } from 'react-router-dom'

function MainNavigation() {
  return (
    <header>
        <div>
            React Meetup
        </div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>New Meetups</Link>
                </li>
                <li>
                    <Link to='/favourite'>Favourite</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation;