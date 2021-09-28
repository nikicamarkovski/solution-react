import React, { useState } from 'react'
import ABN from '../assets/Logos/ABN_logo_zwart.jpg'
import Adidas from '../assets/Logos/Adidas_logo_zwart.jpg'
import KLM from '../assets/Logos/KLM_logo_zwart.jpg';
import Microsoft from '../assets/Logos/Microsoft_logo_zwart-320x161.jpg';
import Mona from '../assets/Logos/Mona_logo_zwart.jpg';
import Nivea from '../assets/Logos/Nivea_logo_zwart.jpg';
import NN from '../assets/Logos/NN_logo_zwart.jpg';
import Oxxio from '../assets/Logos/Oxxio_logo_zwart.jpg';
import Pathe from '../assets/Logos/Pathe_logo_zwart.jpg';
import Tomtom from '../assets/Logos/Tomtom_logo_zwart.jpg';
import Transavia from '../assets/Logos/Transavia_logo_zwart.jpg';
import Triumph from '../assets/Logos/Triumph_logo_zwart.jpg';
import Unilever from '../assets/Logos/Unilever_logo_zwart.jpg';
import Walibi from '../assets/Logos/Walibi_logo_zwart.jpg';
import Zalando from '../assets/Logos/Zalando_logo_zwart.jpg';
import Ziggo from '../assets/Logos/Ziggo_logo_zwart.jpg';

export const Clients = () => {
    const [brandImages, setBrandImages] = useState([ABN, Adidas, KLM, Microsoft, Mona,
        Nivea, NN, Oxxio, Pathe, Tomtom, Transavia, Triumph, Unilever, Walibi, Zalando, Ziggo])
    return (
        <div className="container">
            <div>
                <h2>CLIENTS</h2>
                <p>We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.</p>

            </div>
            <div className="client-logo">
                {
                    brandImages.map((branImage) => (
                        <div className="client-logo-content">

                            <img src={branImage} alt="brand-image" />


                        </div>
                    ))
                }
            </div>
        </div>
    )
}
