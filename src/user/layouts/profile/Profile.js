import React, { Component } from 'react'
import { uport } from '../../../util/connectors.js'

class Profile extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
    this.attest = this.attest.bind(this)
  }

  attest(e) {
    e.preventDefault()

    const address = this.props.authData.address
    console.log(address)

    const d = new Date()
    uport.attestCredentials({
      sub: address,
      claim: {
        "Reputation": {
          "Acceptable": 58,
          "Reviewer": 63
        }
      },
      exp: d.getTime() + (365 * 24 * 60 * 60 * 1000)
    })
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>評価</h1>
<strong>氏名</strong><br />
{this.props.authData.name}<br />
<strong>メールアドレス</strong><br />
{this.props.authData.email}<br />
<strong>評価</strong><br />
{this.props.authData.Reputation.Acceptable || 0}/{this.props.authData.Reputation.Reviewer}<br />
<br />
<button type="button" onClick={this.attest}>評価</button>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile
