import Head from "next/head";
import ReactPlayer from "react-player";

const streams = [
  "https://www.youtube.com/watch?v=2gHKDHmgVlU",
  "https://www.youtube.com/embed/wNcwiMcbiWg",
  "https://www.youtube.com/watch?v=LvfaMv9nbJc",
  "https://www.youtube.com/watch?v=F109TZt3nRc",
  "https://www.youtube.com/watch?v=p9SjR0VNQZY",
];

const Home = () => {
  var url = streams[Math.floor(Math.random() * streams.length)];

  return (
    <div className="w-screen h-screen">
      <ReactPlayer url={url} playing muted width="100%" height="100%" />
      <div className="d-none">
        <ReactPlayer
          url="https://soundcloud.com/zolon-wilkins/0003a"
          playing
          soundcloudConfig={{ preload: true }}
        />
      </div>
    </div>
  );
};

export default Home;
