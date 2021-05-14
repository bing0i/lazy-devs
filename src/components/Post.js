export default function Post(props) {
  const { title, introduction, author, titleSections, sections } = props;
  return (
    <article>
      <h2>{title}</h2>
      <p>{introduction}</p>
      <p>{author}</p>
      {titleSections.map((titleSection, index) => {
        return (
          <section>
            <h3>{titleSection}</h3>
            <p>{sections[index]}</p>
          </section>
        );
      })}
    </article>
  );
}
