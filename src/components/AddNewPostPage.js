import PostPreview from './PostPreview';
import PostForm from './PostForm';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function AddNewPostPage() {
  const categories = useSelector((state) => state.categories);
  const [isInEditMode, setIsInEditMode] = useState(true);
  const [editingPost, setEditingPost] = useState({
    category: categories[0].toLowerCase().replace(/\s/g, ''),
    title: '',
    description: '',
    content: '',
  });
  return (
    <div>
      <label htmlFor="editMode">Edit Mode</label>
      <input
        type="checkbox"
        name="editMode"
        id="editMode"
        defaultChecked={isInEditMode}
        onChange={() => {
          setIsInEditMode(!isInEditMode);
        }}
      />

      {isInEditMode ? (
        <PostForm
          categories={categories}
          editingPost={editingPost}
          setEditingPost={setEditingPost}
        />
      ) : (
        <PostPreview editingPost={editingPost} />
      )}
    </div>
  );
}
