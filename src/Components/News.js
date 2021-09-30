import React, { useEffect, useState } from 'react'
import {news,  clientRes } from '../data';
import arla from '../assets/Images/arla.png'
import bolcom from '../assets/Images/bolcom.png';
import chocomel from '../assets/Images/chocomel.png';
import florensis from '../assets/Images/florensis.png';
import gemeentemuseum from '../assets/Images/gemeentemuseum.png'
import jbl from '../assets/Images/jbl.png';
import kempen from '../assets/Images/kempen.png';
import koninklijkeBbibliotheek from '../assets/Images/koninklijke-bibliotheek.png'
import libertyGlobal from '../assets/Images/liberty-global.png';
import lightning from '../assets/Images/lightning.png';
import philips from '../assets/Images/philips.png';
import tui from '../assets/Images/tui.png';
import zalando from '../assets/Images/zalando.png'
import { ShowMe } from './ShowMe';
import { IconDropdown } from './Icons/IconDropdown';

export const News = () => {
    const images = [arla, bolcom, chocomel, florensis, gemeentemuseum, jbl, kempen, koninklijkeBbibliotheek, libertyGlobal, lightning, philips, tui, zalando];
    
    const [newsData , setnewsData] = useState(news)
    const getSelectState = (state) => {
      
        setnewsData(state)

        
    }
   

    return (
        <div className="container">
            <ShowMe getSelectState={getSelectState} />
            <div className="news">
                <div className="news-section">
                    { newsData != null && newsData.map((elem, index) => (
                       
                        <div className={`${elem.subnews ? "news-section-full" : "news-section-half"}`} >
                            {elem.img &&

                                <div className={`news-section-full-flex ${Object.keys(elem)[0] === "subnews" ? "reverse" : ""}`} >
                                    <div className="main-news">
                                        <img src={images[index]} />

                                        <div>
                                            <p className="brand">{elem.brand}</p>
                                            <p className="news-text">{elem.newsText}</p>
                                            <div className="view-cases"> 
                                            <IconDropdown color={"#1a18f7"}/>
                                            <p className="blue-text">view cases</p>
                                            </div>
                                        </div>
                                    </div>
                                    {elem.subnews &&
                                        <div className="sub-news">
                                            {elem.subnews.map((subnews) => (
                                                <div className="sub-news-content">
                                                    <p className="brand">{subnews.brand}</p>
                                                    <p className="news-text">{subnews.newsText}</p>
                                                    <div className="view-cases">
                                                        <IconDropdown color={"#1a18f7"}/>
                                                    <p className="blue-text">view cases</p>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                    }
                                </div>

                            }
                            <div>

                            </div>

                        </div>


                    ))}
                    <div className="client-res">
                        {clientRes.map((elem) => (
                            <div>
                                <p>{elem.clientRes}</p>
                                <p className="client-name">{elem.nameOfClient}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
