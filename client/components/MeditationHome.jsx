import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import MeditationLog from './MeditationLog'


class MeditationHome extends React.Component {
  //
  render () {
    return (
      <div>
        <div className = "med-home start-area">
          <Link className="special-btn" to='/meditate'><span>START MEDITATION</span></Link>
        </div>
        <div className = "med-home profile-area">
          <div className = "inner">
          <h1>Your Profile</h1>
          <img className = "profile-pic" src="./images/profile.png" alt=""/>
          <h4>Name: Some Name</h4>
          <h4>Bio</h4>
          <hr/>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil dignissimos labore dicta unde, nam suscipit tempore sapiente cumque vitae facilis enim reprehenderit nobis veniam consequatur ipsum distinctio, iusto accusamus, aliquid quos incidunt tenetur magni repudiandae blanditiis magnam? Consectetur, laboriosam deleniti? Dolor doloremque rerum eius corporis qui repellendus quod quasi cumque.</p>

          </div>
         
        </div>
        <div className = "med-home med-logs">
            <h1>Your Meditation Data</h1>
            <div className="med-log-list">
          {[1,2,3,4,5].map(logData => {
            return <MeditationLog data={logData} />
          })}
             
            </div>
        </div>
      </div>
    )
  }
}



export default MeditationHome
