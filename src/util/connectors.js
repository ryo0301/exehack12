//import { Connect } from 'uport-connect'
//
//export let uport = new Connect('TruffleBox')

import { Connect, SimpleSigner } from 'uport-connect'

export const uport = new Connect('inbound_hackathon', {
  clientId: '2ojeBcnNeuu31wxRV42yHB4CGpZT4nU5C76',
  network: 'rinkeby',
  signer: SimpleSigner('84a9dbbf744cd9d51e7dcd92f39ba6de5e9343119f93c8273aab526a24c18ed7')
})

export const web3 = uport.getWeb3()
