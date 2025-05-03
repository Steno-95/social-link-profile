function ProfileHeader({ username, origin, description }) {
  return (
    <header className="flex flex-col items-center justify-center gap-5 text-center">
      <div className="space-y-1">
        <h1 className="text-(--text-white) font-bold text-[1.8rem] sm:text-[1.6rem]">
          {username}
        </h1>
        <p className="text-(--text-green) font-semibold text-[.9rem] text-center sm:text-[1rem]">
          {origin}
        </p>
      </div>

      <p className="text-(--text-white) text-[.9rem] sm:text-[1rem]">
        {description ? `"${description}".` : ""}
      </p>
    </header>
  );
}

export default ProfileHeader;
