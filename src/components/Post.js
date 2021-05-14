export default function Post(props) {
  const { title, introduction, author, titleSections, sections } = props;
  return (
    <sections className="grid grid-cols-5 text-base text-light-text bg-light-bg dark:text-dark-text dark:bg-dark-bg">
      <sections></sections>
      <article className="col-span-3 grid grid-cols-1 gap-y-5">
        <h2 className="text-4xl justify-self-center">{title.toUpperCase()}</h2>
        <p className="text-dark-hover-text text-sm justify-self-center	">
          {introduction}
        </p>
        <p>{author}</p>
        {titleSections.map((titleSection, index) => {
          return (
            <section>
              <h3 className="text-2xl">{titleSection}</h3>
              <p>{sections[index]}</p>
            </section>
          );
        })}
      </article>
      <sections></sections>
    </sections>
  );
}
