import React from 'react'
import { Link } from 'react-router-dom'
import Meditation from './MeditationHome'

// import Navbar from './Navbar'

class Home extends React.Component {
    state = {
      //
    }

    render () {
      return (
            <>
                {/* <Navbar /> */}
                <div className='welcome'>
                  <h2>Welcome.</h2>
                  <p>
                    Lorem ipsum dolor sit amet, est eu sumo autem. Mel cu iusto doctus alterum. Has stet congue laudem at, eam ne sale modus definitionem, eum purto adipisci suavitate ei. Ne duo abhorreant constituam, cum illum probatus posidonium ei. Mel ea meliore perfecto. Enim animal te eam, te albucius delicatissimi usu. Duo ne dicam invidunt. Sumo praesent dissentiunt sea ex, has ne postulant sententiae.
                  </p>
                  <p>
                    <Link to='/meditate'>Begin?</Link>
                  </p>
                </div>
            </>
      )
    }
}

export default Home
