import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function PostForm(props) {
  const { categories, post, setPost } = props;

  const [category, setCategory] = useState(post.category);
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch();

  function handleSubmission(e) {
    e.preventDefault();

    dispatch({ type: 'postPost', payload: post });

    setTitle('');
    setDescription('');
    setContent('');
  }

  return (
    <div className="grid grid-cols-5 my-8">
      <div></div>
      <form
        onSubmit={handleSubmission}
        className="grid col-span-3 text-base grid-auto-row gap-y-8"
      >
        <label htmlFor="categories">
          <span className="ml-3 text-sm font-bold">Choose a category</span>
          <select
            className={`w-full rounded-xl focus:outline-none focus:ring 
          focus:ring-accent focus:border-accent px-3 py-2 shadow-md`}
            spellCheck="false"
            name="categories"
            id="categories"
            defaultValue={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPost({ ...post, category: e.target.value });
            }}
          >
            {categories.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item.toUpperCase().replace('-', ' ')}
                </option>
              );
            })}
          </select>
        </label>

        <label htmlFor="title">
          <span className="ml-3 text-sm font-bold">Title</span>
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
          <span className="ml-3 text-sm font-bold">Description</span>
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
          <span className="ml-3 text-sm font-bold">Content</span>
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
          className="p-3 mb-8 font-bold shadow-md bg-accent rounded-xl focus:outline-none focus:ring focus:ring-gray-600 focus:border-gray-600"
        >
          CREATE A NEW POST
        </button>
      </form>
      <div></div>
    </div>
  );
}
