export default function Card(props) {
  const { title, detail, imagePath, imageAlt } = props;
  return (
    <section
      className="grid grid-cols-5 grid-rows-2  rounded-xl shadow-md my-5 w-6/12 
      text-light-text bg-light-bg dark:text-dark-text dark:bg-dark-card
      w-48 h-48"
    >
      <img
        className="row-span-2 col-span-2 self-center"
        src={imagePath}
        alt={imageAlt}
      ></img>
      <p className="col-span-3 text-lg self-end">{title}</p>
      <p className="col-span-3 text-sm self-start">{detail}</p>
    </section>
  );
}
