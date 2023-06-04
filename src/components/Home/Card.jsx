import { Link } from 'react-router-dom';
import { AiFillCaretRight } from 'react-icons/ai';

export default function ProgramsCard({
  cardInfo: { id, icon, title, info, path, avatar, name, job },
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
      <small>{info}</small>
      {name && (
        <p className='name'>
          <b>{name} </b>
          {job}
        </p>
      )}
      {path && (
        <Link to={path} className='btn sm'>
          Learn More <AiFillCaretRight />
        </Link>
      )}
    </article>
  );
}
