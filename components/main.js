import React, { useState } from "react";
import Head from "next/head";
import ReactPlayer from "react-player";
import Loading from "./Loading";

const streams = [
  "https://www.youtube.com/watch?v=2gHKDHmgVlU",
  "https://www.youtube.com/embed/wNcwiMcbiWg",
  "https://www.youtube.com/watch?v=LvfaMv9nbJc",
  "https://www.youtube.com/watch?v=F109TZt3nRc",
  "https://www.youtube.com/watch?v=p9SjR0VNQZY",
];

const Main = () => {
  const [audioLoading, setAudioLoading] = useState(true);
  let url = streams[Math.floor(Math.random() * streams.length)];
  let audioUrl =
    "https://whoopsadaisy.s3-us-west-2.amazonaws.com/aquarium/0003.mp3";

  const handleAudioStart = () => {
    setAudioLoading(false);
  };

  return (
    <div>
      <Head>
        <title>aquarium by zolon</title>
        <meta property="og:title" content="aquarium" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-screen h-screen ">
        {audioLoading && <Loading />}
        <div className={"w-full h-full " + (audioLoading && "blur-bg")}>
          <ReactPlayer url={url} playing muted width="100%" height="100%" />
          <ReactPlayer
            url={audioUrl}
            height="60"
            width="100"
            playing
            loop
            onStart={handleAudioStart}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
