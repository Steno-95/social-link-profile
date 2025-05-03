function Footer() {
  return (
    <footer className="text-center text-[1rem] md:text-[1.3rem] text-amber-50 mt-auto">
      Challenge by{" "}
      <a
        className="text-blue-800 hover:text-(--text-green) focus:text-(--text-green)"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        title="Redirect to Frontend Mentor website"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        className="text-blue-800 hover:text-(--text-green) focus:text-(--text-green)"
        href="https://github.com/Steno-95"
        title="The link will redirect to the github of Stefano Lezzi"
      >
        Stefano Lezzi
      </a>
      .
    </footer>
  );
}

export default Footer;
