export default function Card(props) {
  const [title, detail, imagePath] = props;
  return (
    <div className="grid grid-cols-4 w-1/2 h-2/3 gap-4 bg-white rounded-xl shadow-md">
      <img class="row-span-2" src={imagePath} alt="Card-image"></img>
      <div className="col-span-3 font-serif text-3xl">{title}</div>
      <p className="col-span-3 font-sans text-base">{detail}</p>
    </div>
  );
}
