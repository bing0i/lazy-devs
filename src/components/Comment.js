export default function Comment(props) {
  const { username, content, avataPath, imageAlt } = props;
  return (
    <section
      className="grid w-48 h-48 grid-cols-5 grid-rows-2 my-5 shadow-md rounded-xl text-light-text bg-light-bg dark:text-dark-text dark:bg-dark-card"
    >
      <img
        className="self-center col-span-2 row-span-2"
        src={avataPath}
        alt={imageAlt}
      ></img>
      <p className="self-end col-span-3 text-lg">{username}</p>
      <p className="self-start col-span-3 text-sm">{content}</p>
    </section>
  );
}
