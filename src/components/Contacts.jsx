import React from 'react'
import Ccard from './Ccard'
import Card from './Card'
import PCard from './PCard'

function Contacts() {

    let details = [
        {
            header: "Secure Assets",
            content: "Assets can only be used by their owners, no matter the transaction type.",
        },
        {
            header: "Secure Contracts",
            content: "Smart contracts define asset types and their logic, including applicable transaction types.",
        },
        {
            header: " Secure Transactions",
            content: "Transactions can be finalized even in adverse conditions.",
        },
        {
            header: "Secure Network",
            content: "Delegated Proof-of-Stake ensures validators are accountable to the Sui community.",
        }
    ]
  return (
    <div className="contacts">
        <div className="top">
            <div className="contactsInfo">
                <h1>Security is in Sui's DNA</h1>
                <div className="special">
                    learn more
                </div>
                
            </div>
            <div className="paragraph">
                Sui Network and Sui Move are designed to provide very high security guarantees to asset owners.
                </div>
        </div>
        <div className="bottom">
           {details.map(({header,content},key)=> {
            return (
                <Ccard header={header} content={content} key={key}/>
            )
           })}
        </div>
    </div>
  )
}

export default Contacts