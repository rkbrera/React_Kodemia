export default function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <span>{props.episode}</span>

      <div className="cover">
        <img src={props.cover} alt={props.name} />
      </div>

      <p>{props.description}</p>

      <h2 className="url">{props.url}</h2>
    </div>
  );
}
