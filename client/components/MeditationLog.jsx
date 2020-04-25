import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Rating } from 'semantic-ui-react'

class MeditationLog extends Component {
    state = {
        displayData: false
    }
    render() {
        return (
            <div onClick={() => {
                this.setState({ displayData: !this.state.displayData })
            }} className="special-btn med-log-item">
                <span className="med-log-item-span">
                    <div>
                        Session {this.props.data.id}
                    </div>

                </span>
                {this.state.displayData &&
                    <div>
                        <p>{`Duration: ${this.props.data.duration} minutes`}</p>
                        <p>{`Experience: ${this.props.data.experience}`}</p>
                        <p>{`Rating: ${<Rating icon='heart' defaultRating={this.props.data.rating} maxRating={5} disabled />}`}</p>
                    </div>
                }
            </div>
        )
    }
}

export default MeditationLog
