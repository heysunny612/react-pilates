import SectionHead from './SectionHead';
import { FaQuestion } from 'react-icons/fa';
import { faqs } from '../../data';
import FAQ from './Faq';

export default function FAQs() {
  return (
    <section className='container faqs-container'>
      <SectionHead title='FAQs' icon={<FaQuestion />} />
      <div className='faqs-wrpper'>
        {faqs.map((faq) => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
}
