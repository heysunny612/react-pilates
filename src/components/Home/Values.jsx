import SectionHead from './SectionHead';
import { values } from '../../data';
import ProgramsCard from './Card';
import { MdOutlineDiamond } from 'react-icons/md';

export default function Values() {
  return (
    <section className='values'>
      <div className='container values-container'>
        <div className='values-left'>
          <div className='values-image'>
            <img
              src='https://images.unsplash.com/photo-1593164842264-854604db2260?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
              alt='RR 필라테스 시범 사진'
            />
          </div>
        </div>
        <div className='values-right'>
          <SectionHead icon={<MdOutlineDiamond />} title='RR 필라테스' />
          <div className='values-wrpper'>
            {values.map((value) => (
              <ProgramsCard
                key={value.id}
                cardInfo={value}
                className='values-value'
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
