import React, { useContext } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext, FirebaseContext } from "../../store/Context";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const signOutHandler = () => {
    firebase.auth().signOut();
    navigate("/");
  };
  return (
    <>
      <div className="headerParentDiv">
        <div className="headerChildDiv">
          <div className="brandName">
            <OlxLogo></OlxLogo>
          </div>
          <div className="placeSearch">
            <Search></Search>
            <input type="text" />
            <Arrow></Arrow>
          </div>
          <div className="productSearch">
            <div className="input">
              <input
                type="text"
                placeholder="Find car,mobile phone and more..."
              />
            </div>
            <div className="searchAction">
              <Search color="#ffffff"></Search>
            </div>
          </div>
          <div className="language">
            <span> ENGLISH </span>
            <Arrow></Arrow>
          </div>
          <div className="loginPage">
            {user && user?.displayName ? (
              <span>{user.displayName} </span>
            ) : (
              <Link to="/login">
                <span>Login</span>
              </Link>
            )}
            <hr />
          </div>
          <div>
            {user && user?.displayName ? (
              <button
                onClick={signOutHandler}
                className="btn btn-sm btn-danger"
              >
                Logout
              </button>
            ) : (
              ""
            )}
          </div>
          <Link to="/create">
            <div className="sellMenu">
              <SellButton></SellButton>
              <div className="sellMenuContent">
                <SellButtonPlus></SellButtonPlus>
                <span>SELL</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
