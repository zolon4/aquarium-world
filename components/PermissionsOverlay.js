const PermissionsOverlay = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.onAccept(true);
  };

  return (
    <div className="loading-bg fixed z-10 h-full w-full flex items-center justify-center">
      <h1 className="text-5xl text-white cursor-pointer" onClick={handleClick}>
        Enter Virtual Aquarium
      </h1>
    </div>
  );
};

export default PermissionsOverlay;
