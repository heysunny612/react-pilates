import { Link } from 'react-router-dom';

export default function ProgramsCard({
  cardInfo: { id, icon, title, desc, path, avatar, name, job, price, features },
  className,
}) {
  return (
    <article key={id} className={`card ${className ? className : ''}`}>
      {avatar && (
        <div className='avatar'>
          <img src={avatar} alt={name} />
        </div>
      )}
      {icon && <span>{icon}</span>}
      <h4>{avatar ? `"${title}"` : title}</h4>
      <small>{desc}</small>
      {name && (
        <p className='name'>
          <b>{name} </b>
          {job}
        </p>
      )}

      {features &&
        features.map(({ feature, available }, idx) => (
          <p key={idx} className={!available ? 'disabled' : ''}>
            {feature}
          </p>
        ))}
      {price && <p className='price btn'>{price}</p>}
      {path && (
        <Link to={path} className='btn sm'>
          Learn More
        </Link>
      )}
    </article>
  );
}
