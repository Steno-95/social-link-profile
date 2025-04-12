function Card({ children }) {
  return (
    <div className="bg-[var(--card-bg)] w-[320px] h-fit mx-auto my-auto shadow-[4px_4px_0_rgb(31,31,31)] rounded-lg border-r-1 border-b-1 border-[var(--link-bg)] p-5 space-y-6">
      {children}
    </div>
  );
}

export default Card;
