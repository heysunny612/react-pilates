import './plans.css';
import Visual from '../../components/Visual';
import { plans } from '../../data';
import Card from '../../components/Home/Card';
export default function Plans() {
  return (
    <>
      <Visual
        title='Plans'
        image='https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVEJTk1JTg0JUVCJTlEJUJDJUVEJTg1JThDJUVDJThBJUE0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
      >
        규칙적이고 반복적인 운동으로 건강한 아름다움을 만들어보아요!
      </Visual>
      <section className='container pages'>
        <div className='plns-container'>
          {plans.map((plan) => {
            return <Card key={plan.id} cardInfo={plan} />;
          })}
        </div>
      </section>
    </>
  );
}
