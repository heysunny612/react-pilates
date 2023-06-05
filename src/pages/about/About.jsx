import Visual from '../../components/Visual';
import './about.css';
export default function About() {
  return (
    <>
      <Visual
        title='About Us'
        image='https://plus.unsplash.com/premium_photo-1679596990572-9af483a16253?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      >
        RR 필라테스는 다양한 바디를 접한 10년 이상의 강사로써 그 어떤 필라테스
        스튜디오보다 회원님을 사랑하고 제대로 가르친다고 자부하는 스튜디오에요
      </Visual>
      <section className='container pages'>
        <article className='about-container'>
          <div className='about-img'>
            <img
              src='https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
              alt='스토리이미지'
            />
          </div>
          <div className='about-content'>
            <h2>RR 필라테스</h2>
            <p>
              재등록에 재등록에 재재등록까지! 인기 만점의 RR 필라테스의 소수정예
              그룹레슨! 고정예약, 어플을 통한 유동적 예약이 가능합니다. 예약의
              어려움이 생기지 않게 1인이 출석해도 폐강없이 정상 운영됩니다.
              일정회원수가 도달하면 신규 회원등록을 받지 않아, 보다 여유로운
              그룹레슨 예약이 가능한 스튜디오에요.
            </p>
            <p>
              1회 체험레슨도 가능한 백석 필라테스 RR필라테스! "나한테 필라테스가
              정말 맞는걸까?" , "기껏 등록했는데 나하고는 안 맞는데..환불받을 수
              있을까?" 이런 걱정 노노! 돈워리! 1회 체험 후 결정하세요. 1회체험
              하셔도 등록에 부담느끼지 않을 수 있도록 해드리는 스튜디오에요.
            </p>
            <p>
              필라테스 기구계의 명품이라고 불리는 Gratz 브랜드의 기구를 사용하고
              있습니다. 조셉필라테스가 제시한 올바른 기능과 중요한 비율을
              유지하기 위해 엄격하게 제조된 기구로써 세계적으로 인정받는
              필라테스 기구에요.
            </p>
          </div>
        </article>

        <article className='about-container'>
          <div className='about-content'>
            <h2>We love you</h2>
            <p>
              다양한 바디를 접한 10년 이상의 강사로써 그 어떤 필라테스
              스튜디오보다 회원님을 사랑하고 제대로 가르친다고 자부하는
              스튜디오에요. 저희는 따로 블로그 체험단, 리뷰체험단 등의
              허위광고에 일절 투자하지 않아요. 입소문에 입소문으로 찾아주신
              회원님들께 허위 광고비보다는 그 비용을 워크샵, 스터드에 더
              투자하는 강사들이에요
            </p>
            <p>
              필라테스는 여자만을 위한 운동이다? NO! NO! 남성 회원님들도
              척추즉만증등 다양한이유로 많이 등록하고 있어요! RR 필라테스는
              청소년부터 80대 회원님까지 레슨을 진행하고 있는 필라테스
              스튜디오에요. 10대 회원님들은 정상가 20% 할인 금액으로 진행되며
              원장선생님의 직강으로만 진행되고 있어요.
            </p>
          </div>
          <div className='about-img'>
            <img
              src='https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
              alt='스토리이미지'
            />
          </div>
        </article>
      </section>
    </>
  );
}
