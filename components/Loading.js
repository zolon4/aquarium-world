const Loading = () => {
  return (
    <div className="loading-bg z-10 w-screen h-screen fixed flex items-center justify-center">
      <img className="spin w-24" src="/static/star.png" />
    </div>
  );
};

export default Loading;