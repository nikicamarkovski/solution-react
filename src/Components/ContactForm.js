import React from 'react'

export const ContactForm = () => {
    return (
        <div className="container">
            <div className="contact-form">
                <div className="contact-form-text">
                    <h4>QUESTION?</h4>
                    <h4>WE ARE HERE TO HELP!
                    </h4>
                </div>
                <div className="contact-form-content">
                    <div className="contact-form-input">
                        <div className="input-field">

                            <input type="text" required />
                            <label>Input field 1</label>
                        </div>
                        <div className="input-field">

                            <input type="text" required />
                            <label>Input field 1</label>
                        </div>
                        <div className="input-field">

                            <textarea required rows={4} />
                            <label>Input field 1</label>
                        </div>
                    </div>
                    <div className="content-button">
                        <button className="btn-blue">send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
