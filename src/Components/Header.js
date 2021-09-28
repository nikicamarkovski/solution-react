import React from 'react'

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-content">
                    <div className="header-content-logo"></div>
                    <div className="header-content-menu">
                        <p className="menu-text">menu</p>
                        <p className="burger-menu"></p>
                    </div>

                </div>
                <div className="header-body">
                    <h1 className="header-title">work</h1>
                </div>
                <div className="header-button">
                    <button className="btn-black">VIEW CASE</button>
                </div>
            </div>

        </header>
    )
}
