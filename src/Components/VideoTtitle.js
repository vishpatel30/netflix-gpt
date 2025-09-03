import React from "react";

const VideoTtitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <div className="text-6xl font-bold w-1/4">{title}</div>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="w-1/4">
        <button className="bg-white text-black rounded-lg p-4 px-5 text-xl hover:bg-opacity-80">Play</button>
        <button className="mx-2 bg-gray-500 text-white rounded-lg p-4 px-5 text-xl">More Info</button>
      </div>
    </div>
  );
};

export default VideoTtitle;
