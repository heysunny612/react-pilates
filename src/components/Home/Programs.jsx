import { FaCrown } from 'react-icons/fa';
import SectionHead from './SectionHead';
import { programs } from '../../data';
import Card from './Card';

export default function Programs() {
  return (
    <section className='container programs-container'>
      <SectionHead icon={<FaCrown />} title='프로그램' />
      <div className='programs-wrapper'>
        {programs.map((program) => (
          <Card
            key={program.id}
            cardInfo={program}
            className='programs-program'
          />
        ))}
      </div>
    </section>
  );
}
