const PermissionsOverlay = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.onAccept(true);
  };

  return (
    <div className="loading-bg fixed z-10 h-full w-full flex items-center justify-center">
      <div className="w-full md:w-8/12">
        <h1
          className="text-10xl text-white cursor-pointer"
          onClick={handleClick}
        >
          Enter Aquarium
        </h1>
      </div>
    </div>
  );
};

export default PermissionsOverlay;
