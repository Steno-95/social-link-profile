function Button({ children, href }) {
  return (
    <a
      className="w-full bg-[var(--link-bg)] text-[var(--text-white)] hover:bg-[var(--text-green)] hover:text-[var(--main-bg)] block text-center py-3 rounded-lg text-[1.1em] font-semibold tracking-wide focus:bg-[var(--text-green)] focus:text-[var(--main-bg)] focus:outline-none"
      href={href}
      onClick={(e) => e.preventDefault()}
      title="Empty link for now.."
    >
      <span></span>
      <span>{children}</span>
    </a>
  );
}

export default Button;
