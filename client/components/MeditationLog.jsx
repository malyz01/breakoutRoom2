import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
                        Session ID
            </div>

                </span>
                {this.state.displayData &&
                    <div>
                        {this.props.data}
                    </div>
                }
            </div>
        )
    }
}

export default MeditationLog
