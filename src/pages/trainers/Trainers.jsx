import './trainers.css';
import Visual from '../../components/Visual';
import { trainers } from '../../data';
import Trainer from '../../components/Trainer';

export default function Trainers() {
  return (
    <>
      <Visual
        title='Trainers'
        image='https://images.unsplash.com/photo-1613063373992-d2dc00ade35c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80'
      >
        다양한 바디를 접한 10년 이상의 강사로써 그 어떤 필라테스 스튜디오보다
        회원님을 사랑하고 제대로 가르친다고 자부하는 스튜디오에요.
      </Visual>
      <section className='container pages'>
        <div className='trainers-container'>
          {trainers.map((trainer) => (
            <Trainer key={trainer.id} info={trainer} />
          ))}
        </div>
      </section>
    </>
  );
}
