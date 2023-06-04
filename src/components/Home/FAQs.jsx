import SectionHead from './SectionHead';
import { FaCrown } from 'react-icons/fa';
import { faqs } from '../../data';
import FAQ from './Faq';

export default function FAQs() {
  return (
    <section className='container faqs-container'>
      <SectionHead title='FAQs' icon={<FaCrown />} />
      <div className='faqs-wrpper'>
        {faqs.map((faq) => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
}
