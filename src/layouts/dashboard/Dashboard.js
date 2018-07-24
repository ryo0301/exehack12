import React, { Component } from 'react'
import SharesContract from '../../util/SharesContract'
import { uport } from '../../util/connectors.js'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
    this.reserve = this.reserve.bind(this)
  }

  reserve(e) {
    e.preventDefault()

    const address = this.props.authData.address
    console.log(address)

    SharesContract.updateShares(0, (error, txHash) => {
      console.log('updateShares')
      if (error) {
        console.log(error)
      } else {
        console.log(txHash)
        const d = new Date()
        uport.attestCredentials({
          sub: address,
          claim: {
            "Ticket": {
              "Host": "LIFULL STAY",
              "Date": d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate(),
              "Tx": txHash
            }
          },
          exp: d.getTime() + (5 * 24 * 60 * 60 * 1000)
        })
      }
    })
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>予約</h1>
<strong>氏名</strong><br />
{this.props.authData.name}<br />
<strong>メールアドレス</strong><br />
{this.props.authData.email}<br />
<strong>評価</strong><br />
{this.props.authData.Reputation.Acceptable}/{this.props.authData.Reputation.Reviewer}<br />
<br />
<strong>宿泊所</strong><br />
東京都世田谷区 マンションの一室<br />
<strong>期間</strong><br />
2020-08-20 - 2020-08-25<br />
<strong>人数</strong><br />
1 名<br />
<br />
<button type="button" onClick={this.reserve}>予約</button>
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard
