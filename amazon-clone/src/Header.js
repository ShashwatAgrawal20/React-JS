import React from 'react'
import './Style/Header.css'
// Importing the search Button
import SearchIcon from "@material-ui/icons/Search";
// Importing the Basket Icon
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";


function Header() {
    return (
        <div className='header'>
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>

            <div className="header__search">
                <input
                    className="header__searchInput" type="text" />
                {/* Logo */}
                <SearchIcon
                    className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">SignIn</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">&Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basetCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
