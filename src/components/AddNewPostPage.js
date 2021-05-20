import Post from './Post';
import PostForm from './PostForm';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function AddNewPostPage() {
  const categories = useSelector((state) => state.categories);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [post, setPost] = useState({
    category: categories[0].toLowerCase().replace(/\s/g, ''),
    title: '',
    description: '',
    content: '',
  });
  return (
    <div className="grid grid-cols-5">
      <div></div>
      <section className="col-span-3">
        <div className="mx-3 my-5">
          <label htmlFor="toggle" className="text-SM font-bold mr-5">
            PREVIEW MODE
          </label>
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              type="checkbox"
              name="editMode"
              id="editMode"
              defaultChecked={isPreviewMode}
              onChange={() => {
                setIsPreviewMode(!isPreviewMode);
              }}
            />
            <label
              htmlFor="editMode"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
        </div>

        {isPreviewMode ? (
          <Post category={post.category} post={post} />
        ) : (
          <PostForm categories={categories} post={post} setPost={setPost} />
        )}
      </section>
      <div></div>
    </div>
  );
}
