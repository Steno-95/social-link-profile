function Card({ children }) {
  return (
    <main className="bg-(--card-bg) min-w-[20rem] h-fit mx-auto my-auto shadow-[4px_4px_0_rgb(31,31,31)] rounded-lg border-r-1 border-b-1 border-(--link-bg) p-5 space-y-6">
      {children}
    </main>
  );
}

export default Card;
