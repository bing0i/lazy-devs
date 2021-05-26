import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';
import { useCallback } from 'react';
import { pushPost } from '../sagas/actionsSaga';

const PostForm = ({ post, setPost }) => {
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const handleSubmission = useCallback(
    e => {
      e.preventDefault();

      post.category !== ''
        ? dispatch(pushPost(post))
        : dispatch(pushPost({ ...post, category: categories[0].title }));

      setPost({
        category: '',
        title: '',
        description: '',
        content: '',
      });
    },
    [post, setPost, dispatch, categories]
  );
  const handleInput = useCallback(
    e => {
      setPost({ ...post, [e.target.name]: e.target.value });
    },
    [post, setPost]
  );

  return (
    <div className="grid grid-cols-5 my-8">
      <div></div>
      <form
        onSubmit={handleSubmission}
        className="grid col-span-3 text-base text-light-text grid-auto-row gap-y-8"
      >
        <label htmlFor="categories">
          <span className="ml-3 text-sm font-bold">CATEGORY</span>
          <select
            className={`w-full rounded-xl focus:outline-none focus:ring 
          focus:ring-accent focus:border-accent px-3 py-2 shadow-md`}
            spellCheck="false"
            name="category"
            id="category"
            defaultValue={post.category}
            onChange={handleInput}
          >
            {categories.map(item => {
              return (
                <option key={item._id} value={item.title}>
                  {item.title.toUpperCase().replace('-', ' ')}
                </option>
              );
            })}
          </select>
        </label>

        <label htmlFor="title">
          <span className="ml-3 text-sm font-bold">TITLE</span>
          <input
            className={`w-full rounded-xl focus:outline-none focus:ring 
          focus:ring-accent focus:border-accent px-3 py-2 shadow-md`}
            spellCheck="false"
            type="text"
            name="title"
            id="title"
            value={post.title}
            onInput={handleInput}
          />
        </label>

        <label htmlFor="description">
          <span className="ml-3 text-sm font-bold">DESCRIPTION</span>
          <input
            className={`w-full rounded-xl focus:outline-none focus:ring 
          focus:ring-accent focus:border-accent px-3 py-2 shadow-md`}
            spellCheck="false"
            type="text"
            name="description"
            id="description"
            value={post.description}
            onInput={handleInput}
          />
        </label>

        <label htmlFor="content">
          <span className="ml-3 text-sm font-bold">CONTENT</span>
          <textarea
            className={`w-full h-screen rounded-xl focus:outline-none focus:ring 
          focus:ring-accent focus:border-accent px-3 py-2 shadow-md resize-none`}
            spellCheck="false"
            name="content"
            id="content"
            value={post.content}
            onInput={handleInput}
          ></textarea>
        </label>

        <button
          type="submit"
          className="p-3 mb-8 font-bold shadow-md bg-accent rounded-xl focus:outline-none focus:ring focus:ring-light-text focus:border-light-text hover:bg-hover-accent hover:text-white"
        >
          CREATE A NEW POST
        </button>
      </form>
      <div></div>
    </div>
  );
};

export default memo(PostForm);
