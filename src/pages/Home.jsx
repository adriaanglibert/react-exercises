import Container from '../components/Container';
import { Link } from 'react-router-dom'
import ROUTES from '../routes';
import React from 'react'

const Home = () => {
  return (
    <>
      <h1>Oefeningen React</h1>

      <ul>
        <li>
          <Link to={ROUTES.MODAL}>
            Modal
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Home