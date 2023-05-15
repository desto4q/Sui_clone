import React from 'react'


let Fitems = ({header,links}) => {
    return(
        <div className="Fitems">
            <h2>{header}</h2>
            {links && links.map((items,key)=>{
                return (
                    <a href="" key={key}>{items}</a>
                )
            })}
        </div>
    )
}

function Footer() {

    let fdetails  = [
        {
            header: "Developers",
            links: [
                "Developer Portal",
                "Documentation",
                "Github",
                "Whitepaper",
                "Newtwork Status",
                "Network Information",
             
            ],
        },
        {
            header: "Community",
            links: [
                "Ambassador Program",
                "Blog",
                "Ecosystem Directory",
                "Ecosystem Job Board",
                "Community Access Program",
            ],
        },
        {
            header: "Sui Foundation",
            links: [
                "About",
                "Careers",
                "Developer Grants",
                "Academic Research Awards",
                "Contact Us",
            ],
        },
      
    ]

let suiLinks = [
    "https://cdn-icons-png.flaticon.com/128/3800/3800029.png",
    "https://cdn-icons-png.flaticon.com/128/220/220799.png",
    "https://cdn-icons-png.flaticon.com/128/152/152810.png",
    "https://cdn-icons-png.flaticon.com/128/2111/2111532.png"
]
  return (
   <footer>
        <div className='footerHeader'>
            <h1>Build Beyond</h1>
            <h3>Unlock the freedom to build powerful on-chain assets</h3>
        </div>

        <div className="footerItems">
                <div className="items">
                    {fdetails.map(({header,links},key)=>{
                        return (
                            <Fitems header={header} links={links} key={key}/>
                        )
                    })}
                </div>
                <div className="sui">
                    <img src="https://assets-global.website-files.com/6425f546844727ce5fb9e5ab/6439ab9680317757ca125502_FooterLogo.svg" alt="" />
                    <div className="suiLinks">
                        {suiLinks.map((item,key)=>{
                            return (
                                <div key={key} className="icon">
                                    <img src={item} alt="" />
                                </div>
                            )
                        })}
                    </div>
                    <h3>©2023 Copyright Sui. All rights reserved.</h3>
                </div>
                
            </div>
   </footer>
  )
}

export default Footer