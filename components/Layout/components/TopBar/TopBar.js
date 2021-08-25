import React from "react";

export default function TopBar()
{
    return(
        <div className="black-header" id="nav">
            <header>
                <div className="nav-top">
                    <div className="container" >
                        <div className="row" >
                            <div className="col-lg-11 centered">
                                <div className="top-nav-left" id="first-nav">
                                    <ul className="top-left-list">
                                        <li>
                                            <a href="https://symposiumcafe.com/decor">Decor</a>
                                        </li>
                                        <li>
                                            <a href="https://symposiumcafe.com/feedback">Feedback</a>
                                        </li>
                                        <li>
                                            <a href="https://symposiumcafe.com/charity">Charity</a>
                                        </li>
                                        <li>
                                            <a href="https://symposiumcafe.com/contact">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                                <ul className="top-right-nav">
                                    <li>
                                        <a className="gold-text" href="https://order2.silverwarepos.com/app/SymposiumCafe#!/stores">ORDER ONLINE</a>
                                    </li>
                                    <li>
                                        <a href="https://symposiumcafe.com/delivery" className="gold-text" style={{color:'#d2c41a;'}}>Delivery</a>
                                </li>
                                <li>
                                    <a href="https://cws.givex.com/cws4.0/symposium4/" className="gold-text" style={{color:'#d2c41a;'}}>Online Gift Cards</a>
                            </li>
                        </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>



    )
}