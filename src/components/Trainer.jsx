export default function Trainer({ info: { image, name, career, school } }) {
  return (
    <article className='trainer'>
      <div className='trainer-image'>
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>경력{career}+</p>
      <p>{school}</p>
    </article>
  );
}
