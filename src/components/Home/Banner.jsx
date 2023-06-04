import { Link } from 'react-router-dom';
import '../../pages/home/home.css';
export default function Banner() {
  return (
    <section className='main-banner'>
      <div className='container banner-container'>
        <div className='main-banner-left'>
          <h4>일산 유일, 전문적 체육강사!</h4>
          <h2>규칙적이고 반복적인 운동으로 건강한 아름다움을 만들어보아요!</h2>
          <ul className='banner-tags'>
            <li># 클래식필라테스 지도자</li>
            <li># 명품 필라테스 기구 Gratz setting</li>
            <li>
              # 일산 유일 , 전문적인 체육전공 강사들로 구성된 필라테스 스튜디오
            </li>
            <li>
              # 재등록률이 보여주는 믿고 맡기는 나를 위한 투자 ‘RR Pilates’
            </li>
            <li># 4:1 그룹레슨은 디테일이 다른 소수정예 레슨으로 진행</li>
          </ul>
          <Link to='/plans' className='btn lg'>
            Get Started
          </Link>
        </div>
        <div className='main-banner-right'>
          <div className='main-banner-image'>
            <img
              src='https://images.unsplash.com/photo-1604467731651-3d8b9c702b86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
              alt='RR 필라테스'
            />
            <div>
              <img
                src='https://images.unsplash.com/photo-1552196634-24a18d82ac56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80'
                alt='RR 필라테스'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
