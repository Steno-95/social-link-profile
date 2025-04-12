function ProfileHeader({ username, origin, description }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-center">
      <div className="space-y-1">
        <h2 className="text-[var(--text-white)] font-bold text-[1.8em] sm:text-[1.4em]">
          {username}
        </h2>
        <h4 className="text-[var(--text-green)] font-semibold text-[1em] text-center sm:text-[.8em]">
          {origin}
        </h4>
      </div>

      <p className="text-[var(--text-white)] text-[1em] sm:text-[.8em]">
        {description ? `"${description}".` : ""}
      </p>
    </div>
  );
}

export default ProfileHeader;
