import { useCallback } from 'react';
import { useState, memo } from 'react';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const [user, setUser] = useState({ username: '', password: '' });

  const dispatch = useDispatch();

  const handleSubmission = useCallback(
    (e) => {
      e.preventDefault();

      dispatch({ type: 'login', payload: user });

      setUser({ username: '', password: '' });
    },
    [user, dispatch]
  );

  const handleInput = useCallback(
    (e) => setUser({ ...user, [e.target.name]: e.target.value }),
    [user]
  );

  return (
    <div className="grid grid-cols-8 my-9">
      <div className="col-span-3"></div>
      <form
        onSubmit={handleSubmission}
        className="grid col-span-2 text-base grid-auto-row gap-y-8"
      >
        <label htmlFor="username">
          <span className="ml-3 text-sm font-bold">USERNAME</span>
          <input
            className={`w-full text-base rounded-xl focus:outline-none focus:ring 
          focus:ring-accent focus:border-accent px-3 py-2 shadow-md`}
            spellCheck="false"
            type="text"
            name="username"
            id="username"
            value={user.username}
            onInput={handleInput}
          />
        </label>

        <label htmlFor="description">
          <span className="ml-3 text-sm font-bold">PASSWORD</span>
          <input
            className={`w-full text-base rounded-xl focus:outline-none focus:ring 
          focus:ring-accent focus:border-accent px-3 py-2 shadow-md`}
            spellCheck="false"
            type="password"
            name="password"
            id="password"
            value={user.password}
            onInput={handleInput}
          />
        </label>

        <button
          type="submit"
          className="p-3 mb-8 font-bold shadow-md bg-accent rounded-xl focus:outline-none focus:ring focus:ring-light-text focus:border-light-text hover:bg-hover-accent hover:text-white"
        >
          LOGIN
        </button>
      </form>
      <div className="col-span-3"></div>
    </div>
  );
};

export default memo(LoginPage);
