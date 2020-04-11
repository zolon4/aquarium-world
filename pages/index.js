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
  let url = streams[Math.floor(Math.random() * streams.length)];
  let audioUrl =
    "https://whoopsadaisy.s3-us-west-2.amazonaws.com/aquarium/0003.mp3";

  return (
    <div>
      <Head>
        <title>aquarium by zolon</title>
        <meta property="og:title" content="aquarium" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-screen h-screen">
        <ReactPlayer url={url} playing muted width="100%" height="100%" />
        <div className="hidden">
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1030469980&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
