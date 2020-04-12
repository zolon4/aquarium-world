import React, { useState } from "react";
import Head from "next/head";
import ReactPlayer from "react-player";
import Loading from "./Loading";
import PermissionsOverlay from "./PermissionsOverlay";
const streams = [
  "https://www.youtube.com/watch?v=2gHKDHmgVlU",
  "https://www.youtube.com/embed/wNcwiMcbiWg",
  "https://www.youtube.com/watch?v=LvfaMv9nbJc",
  "https://www.youtube.com/watch?v=F109TZt3nRc",
  "https://www.youtube.com/watch?v=p9SjR0VNQZY",
  "https://www.youtube.com/watch?v=5JjGc5fN1K0",
];

const Main = () => {
  const [audioLoading, setAudioLoading] = useState(true);
  const [userReady, setUserReady] = useState(false);

  let url = streams[Math.floor(Math.random() * streams.length)];
  let audioUrl =
    "https://whoopsadaisy.s3-us-west-2.amazonaws.com/aquarium/0003.mp3";

  const handleAudioStart = () => {
    setAudioLoading(false);
  };

  const handleError = (error) => {
    console.log(error);
  };

  let overlay;

  if (!userReady) {
    return <PermissionsOverlay onAccept={setUserReady} />;
  } else if (userReady && audioLoading) {
    overlay = <Loading />;
  }

  return (
    <div>
      <Head>
        <title>aquarium by zolon</title>
        <meta property="og:title" content="zolon's aquarium thing" />
        <meta property="og:image" content="/og.png" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-screen h-screen">
        {overlay}
        <div className={"w-full h-full " + (audioLoading && "blur-bg")}>
          <ReactPlayer url={url} playing muted width="100%" height="100%" />
          {userReady && (
            <ReactPlayer
              url={audioUrl}
              height="60"
              width="100"
              playing={userReady}
              loop
              onStart={handleAudioStart}
              onError={handleError}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
