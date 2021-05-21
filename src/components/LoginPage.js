import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function PostForm(props) {
  const [user, setUser] = useState({ user: '', password: '' });
  const dispatch = useDispatch();

  function handleSubmission(e) {
    e.preventDefault();

    dispatch({ type: 'login', payload: user });

    setUser({
      username: '',
      password: '',
    });
  }

  return (
    <div className="grid grid-cols-9 my-8">
      <div className="col-span-4"></div>
      <form
        onSubmit={handleSubmission}
        className="grid text-base grid-auto-row gap-y-8"
      >
        <label htmlFor="username">
          <span className="ml-3 text-sm font-bold">Username</span>
          <input
            className={`w-full rounded-xl focus:outline-none focus:ring 
          focus:ring-accent focus:border-accent px-3 py-2 shadow-md`}
            spellCheck="false"
            type="text"
            name="username"
            id="username"
            value={user.username}
            onInput={(e) => {
              setUser({ ...user, username: e.target.value });
            }}
          />
        </label>

        <label htmlFor="description">
          <span className="ml-3 text-sm font-bold">Password</span>
          <input
            className={`w-full rounded-xl focus:outline-none focus:ring 
          focus:ring-accent focus:border-accent px-3 py-2 shadow-md`}
            spellCheck="false"
            type="password"
            name="password"
            id="password"
            value={user.password}
            onInput={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
        </label>

        <button
          type="submit"
          className="p-3 mb-8 font-bold shadow-md bg-accent rounded-xl focus:outline-none focus:ring focus:ring-gray-600 focus:border-gray-600"
        >
          Login
        </button>
      </form>
      <div className="col-span-4"></div>
    </div>
  );
}
