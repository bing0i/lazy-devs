import showdown from 'showdown';

export default function PostPreview(props) {
  const { editingPost } = props;
  const mdConverter = new showdown.Converter();

  return (
    <section>
      <p>wqehgkjwqgewqgejgqkjew</p>
      <p>{editingPost.category}</p>
      <p>{editingPost.title}</p>
      <p>{editingPost.description}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: mdConverter.makeHtml(editingPost.content),
        }}
      ></div>
    </section>
  );
}
