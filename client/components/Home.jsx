import React from 'react'
import { connect } from 'react-redux'

import { fetchUserSessions } from '../store/actions/sessions'

class Home extends React.Component {
  state = {
    //
  }

  handleBegin = () => {
    this.props.history.push('/meditate')
  }

  render() {
    return (
      <div className="home-container">
        <div className="welcome">
          <h2>Welcome.</h2>
          <p>
            Lorem ipsum dolor sit amet, est eu sumo autem. Mel cu iusto doctus
            alterum. Has stet congue laudem at, eam ne sale modus definitionem,
            eum purto adipisci suavitate ei. Ne duo abhorreant constituam, cum
            illum probatus posidonium ei. Mel ea meliore perfecto. Enim animal
            te eam, te albucius delicatissimi usu. Duo ne dicam invidunt. Sumo
            praesent dissentiunt sea ex, has ne postulant sententiae.
          </p>
          <button onClick={this.handleBegin}>Begin</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { fetchUserSessions })(Home)
