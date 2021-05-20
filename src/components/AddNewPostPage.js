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
    <section>
      <div className="mt-8 text-center">
        <label htmlFor="toggle" className="mr-5 text-sm font-bold">
          PREVIEW MODE
        </label>
        <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in select-none">
          <input
            className="absolute block w-6 h-6 bg-white border-4 rounded-full appearance-none cursor-pointer toggle-checkbox"
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
            className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer toggle-label"
          ></label>
        </div>
      </div>

      {isPreviewMode ? (
        <Post category={post.category} post={post} />
      ) : (
        <PostForm categories={categories} post={post} setPost={setPost} />
      )}
    </section>
  );
}
