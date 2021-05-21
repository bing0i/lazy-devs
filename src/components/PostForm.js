import { useDispatch, useSelector } from 'react-redux';

export default function PostForm(props) {
  const { post, setPost } = props;
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  function handleSubmission(e) {
    e.preventDefault();

    post.category !== ''
      ? dispatch({ type: 'postPost', payload: post })
      : dispatch({
          type: 'postPost',
          payload: { ...post, category: categories[0].title },
        });

    setPost({
      category: '',
      title: '',
      description: '',
      content: '',
    });
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
            defaultValue={post.category}
            onChange={(e) => {
              setPost({ ...post, category: e.target.value });
            }}
          >
            {categories.map((item) => {
              return (
                <option key={item._id} value={item.title}>
                  {item.title.toUpperCase().replace('-', ' ')}
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
            value={post.title}
            onInput={(e) => {
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
            value={post.description}
            onInput={(e) => {
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
            value={post.content}
            onInput={(e) => {
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
