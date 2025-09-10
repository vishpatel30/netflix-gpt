import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import auth from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo,supported_Languages,user_avtAR } from "../utils/constant.js";
import { toggleGPTSearchView } from "../utils/GPTSlice.js";
import { changeLanguage } from "../utils/configSlice.js";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSearchbtnClick=()=>{
    dispatch(toggleGPTSearchView());
  }
  const showGPTSearch = useSelector(store=>store.gpt.showGPTSearch);
  useEffect(() => {
    const unSubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ..
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });
    return unSubscribe;
  }, []);
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((err) => {});
  };
  const handlelanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        alt="logo"
        className="w-44"
        src={Logo}
      ></img>
      {user && (
        <div className="flex p-2">
          {showGPTSearch && (<select className="p-2 m-2 bg-gray-900 text-white" onChange={handlelanguageChange}>
            {supported_Languages.map(d=>{return (<option key={d.identifier} value={d.identifier}>{d.name}</option>)})}
          </select>)}
          <button className="py-2 px-4 m-2 text-white bg-purple-800 rounded" onClick={handleSearchbtnClick}>{showGPTSearch ?"Homepage":"GPT Search"}</button>
          <img
            alt="user-icon"
            className="w-12 h-12 p-2"
            src={
             user.photoURL
            }
          />
          <button onClick={handleSignOut} className="font-bold text-white p-2">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
