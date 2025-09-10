import React from "react";
import lang from "./languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
 const language = useSelector(store=> store.config?.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 m-6 bg-black grid grid-cols-12">
        <input type="text" className="p-4 m-4 col-span-9 text-black" placeholder={lang[language]?.placeholder}/> 
        <button className="m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3">{lang[language]?.search}</button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
