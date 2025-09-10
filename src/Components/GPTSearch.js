import React from "react";
import GPTSearchBar from "../utils/GPTSearchBar";
import { bg_URL } from "../utils/constant";

const GPTSearch = () => {
  return (
    <div>
      {" "}
      <div className="absolute -z-10">
        <img src={bg_URL} />
      </div>
      <GPTSearchBar />
    </div>
  );
};

export default GPTSearch;
