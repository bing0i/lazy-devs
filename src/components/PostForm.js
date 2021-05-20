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
    <form
      onSubmit={handleSubmission}
      className="grid grid-auto-row gap-y-8 text-base"
    >
      <label htmlFor="categories">
        <span className="ml-3 font-bold text-sm">Choose a category</span>
        <select
          className={`w-full rounded-xl focus:outline-none focus:ring 
          focus:ring-accent focus:border-accent px-3 py-2 shadow-md`}
          spellCheck="false"
          name="categories"
          id="categories"
          defaultValue={category}
          onChange={(e) => {
            setCategory(e.target.value.toLowerCase().replace(/\s/g, ''));
            setPost({ ...post, category: e.target.value });
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
      </label>

      <label htmlFor="title">
        <span className="ml-3 font-bold text-sm">Title</span>
        <input
          className={`w-full rounded-xl focus:outline-none focus:ring 
          focus:ring-accent focus:border-accent px-3 py-2 shadow-md`}
          spellCheck="false"
          type="text"
          name="title"
          id="title"
          value={title}
          onInput={(e) => {
            setTitle(e.target.value);
            setPost({ ...post, title: e.target.value });
          }}
        />
      </label>

      <label htmlFor="description">
        <span className="ml-3 font-bold text-sm">Description</span>
        <input
          className={`w-full rounded-xl focus:outline-none focus:ring 
          focus:ring-accent focus:border-accent px-3 py-2 shadow-md`}
          spellCheck="false"
          type="text"
          name="description"
          id="description"
          value={description}
          onInput={(e) => {
            setDescription(e.target.value);
            setPost({ ...post, description: e.target.value });
          }}
        />
      </label>

      <label htmlFor="content">
        <span className="ml-3 font-bold text-sm">Content</span>
        <textarea
          className={`w-full h-screen rounded-xl focus:outline-none focus:ring 
          focus:ring-accent focus:border-accent px-3 py-2 shadow-md resize-none`}
          spellCheck="false"
          name="content"
          id="content"
          value={content}
          onInput={(e) => {
            setContent(e.target.value);
            setPost({ ...post, content: e.target.value });
          }}
        ></textarea>
      </label>

      <button
        type="submit"
        className="font-bold bg-accent rounded-xl p-3 shadow-md mb-8"
      >
        CREATE A NEW POST
      </button>
    </form>
  );
}
