import { useSelector } from 'react-redux';

export default function ErrorPage() {
  const errors = useSelector((state) => state.errors);

  return (
    <div className="my-8 text-center">
      <h1 className="mb-5 text-3xl font-bold text-red-500">
        SOMETHING WAS WRONG!
      </h1>
      {errors.map((error) => {
        return <p className="text-base">{error.message}</p>;
      })}
    </div>
  );
}
