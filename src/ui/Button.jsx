function Button({ children, href }) {
  return (
    <li className="w-full">
      <a
        className=" bg-(--link-bg) text-(--text-white) hover:bg-(--text-green) hover:text-(--main-bg) block text-center py-3 rounded-lg text-[1.2rem] font-semibold tracking-wide focus:bg-(--text-green) focus:text-(--main-bg) focus:outline-none"
        href={href}
        onClick={(e) => e.preventDefault()}
        title="Empty link for now.."
      >
        <span>{children}</span>
      </a>
    </li>
  );
}

export default Button;
