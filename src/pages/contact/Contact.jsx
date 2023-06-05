import Visual from '../../components/Visual';
import './contact.css';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { RiKakaoTalkFill } from 'react-icons/ri';
export default function Contact() {
  return (
    <>
      <Visual
        title='Get In Touch'
        image='https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
      >
        예약의 어려움이 생기지 않게 1인이 출석해도 폐강없이 정상 운영됩니다.
        일정회원수가 도달하면 신규 회원등록을 받지 않아, 보다 여유로운 그룹레슨
        예약이 가능한 스튜디오에요.
      </Visual>
      <section className='container pages'>
        <div className='contact_wrapper'>
          <a
            href='mailto:someone@example.com?Subject=Hello%20again'
            target='_blank'
            rel='noreferrer noopener'
          >
            <MdEmail />
          </a>
          <a
            href='http://m.me/ernest_achirever'
            target='_blank'
            rel='noreferrer noopener'
          >
            <BsMessenger />
          </a>
          <a
            href='contact'
            onClick={() => {
              alert('오픈채팅 준비중입니다.');
            }}
          >
            <RiKakaoTalkFill />
          </a>
        </div>
      </section>
    </>
  );
}
