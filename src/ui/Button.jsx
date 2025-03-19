function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className="inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide text-stone-800 uppercase transition-colors hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-4"
    >
      {children}
    </button>
  );
}

export default Button;
