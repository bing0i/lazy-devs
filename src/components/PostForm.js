import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPost } from '../redux/slices/postsSlice';

export default function PostForm(props) {
  const { categories, post, setPost } = props;

  const [category, setCategory] = useState(post.category);
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch();

  function handleSubmission(e) {
    e.preventDefault();

    dispatch(addNewPost({ category, title, description, content }));

    setTitle('');
    setDescription('');
    setContent('');
  }

  return (
    <div className="grid grid-cols-3">
      <section></section>
      <form onSubmit={handleSubmission} className="grid grid-auto-row">
        <label htmlFor="categories">Choose a category</label>
        <select
          name="categories"
          id="categories"
          onChange={(e) => {
            setCategory(e.target.value.toLowerCase().replace(/\s/g, ''));
          }}
        >
          {categories.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item.toUpperCase()}
              </option>
            );
          })}
        </select>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setPost({ ...post, title });
          }}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            setPost({ ...post, description });
          }}
        />

        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            setPost({ ...post, content });
          }}
        ></textarea>

        <button type="submit">Create a new post</button>
      </form>
      <section></section>
    </div>
  );
}
