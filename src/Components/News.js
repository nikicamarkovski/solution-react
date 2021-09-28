import React, { useState } from 'react'
import { news, clientRes } from '../data';
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

export const News = () => {
    const images = [arla, bolcom, chocomel, florensis, gemeentemuseum, jbl, kempen, koninklijkeBbibliotheek, libertyGlobal, lightning, philips, tui, zalando];
    const [reverse, setReverse] = useState(false);
    const handleOnLoad = () => {
        setReverse(!reverse);
        console.log(reverse)
    }

    return (
        <div className="container">
            <div className="news">
                <div className="news-section">
                    {news.map((elem, index) => (

                        <div className={`${elem.subnews ? "news-section-full" : "news-section-half"}`} >
                            {elem.img &&

                                <div className={`news-section-full-flex ${Object.keys(elem)[0] === "subnews" ? "reverse" : ""}`} onLoad={handleOnLoad}>
                                    <div className="main-news">
                                        <img src={images[index]} />

                                        <div>
                                            <p className="brand">{elem.brand}</p>
                                            <p className="news-text">{elem.newsText}</p>
                                            <a className="view-cases">view cases</a>
                                        </div>
                                    </div>
                                    {elem.subnews &&
                                        <div className="sub-news">
                                            {elem.subnews.map((subnews) => (
                                                <div>
                                                    <p className="brand">{subnews.brand}</p>
                                                    <p className="news-text">{subnews.newsText}</p>
                                                    <p className="view-cases">view cases</p>
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
                                <p>{elem.nameOfClient}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
