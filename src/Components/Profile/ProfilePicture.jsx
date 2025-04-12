function ProfilePicture({ img }) {
  return (
    <figure className="w-20 h-20 rounded-full overflow-hidden">
      <img
        src={`/images/${img}`}
        alt="profile picture of the user"
        className="w-full"
      />
    </figure>
  );
}

export default ProfilePicture;
