import Logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import { FaBloggerB } from 'react-icons/fa';
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div className='container footer-container'>
        <article className='footer-info'>
          <Link to='/' className='logo'>
            <img src={Logo} alt='RR 필라테스' />
          </Link>
          <p>
            상호명: RR 필라테스 │ 대표자: 황수연 <br />
            대표번호: 031-123-4567(평일: am 09시~pm 11시 <br />
            토요일: am10시~ pm 8시 (연증무휴) <br />
            주소: 경기 고양시 일산동구 백석동 1234-5 2층 <br />
            사업자 등록번호: 123-45-67890
          </p>
          <div className='footer-socials'>
            <a
              href='https://www.instagram.com/rr.pilates/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <BsInstagram />
            </a>
            <a
              href='https://m.blog.naver.com/rkdgkrud77/222845523355'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FaBloggerB />
            </a>
            <a href='/' target='_blank' rel='noreferrer noopener'>
              <BsFacebook />
            </a>
          </div>
        </article>
        <article className='footer-links'>
          <h4>Site Map</h4>
          <Link to='/'>About</Link>
          <Link to='/plans'>Plans</Link>
          <Link to='/trainers'>Trainers</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/contact'>Contact</Link>
        </article>
        <article className='footer-links'>
          <h4>Insights</h4>
          <Link to='/'>Blog</Link>
          <Link to='/'>FAQs</Link>
          <Link to='/'>Events</Link>
        </article>
        <article className='footer-links'>
          <h4>Get In touch</h4>
          <Link to='/'>Contact Us</Link>
          <Link to='/'>Support</Link>
        </article>
      </div>
      <div className='footer-copyright'>
        <small>ⓒ 2023 RR 필라테스 Corp.</small>
      </div>
    </footer>
  );
}
