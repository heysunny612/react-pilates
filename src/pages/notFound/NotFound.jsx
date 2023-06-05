import { Link } from 'react-router-dom';
import './notFound.css';

export default function NotFound() {
  return (
    <section className='container pages'>
      <div className='notfound-container'>
        <h2>Page Not Found</h2>
        <Link to='/' className='btn'>
          홈으로
        </Link>
      </div>
    </section>
  );
}
