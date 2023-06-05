import Card from './Card';
import { reviews } from '../../data';
import SectionHead from './SectionHead';
import { MdOutlineReviews } from 'react-icons/md';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function Review() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  const handlePrev = () => {
    if (index <= 0) {
      setIndex(reviews.length - 1);
      return;
    }
    setIndex((prev) => prev - 1);
  };
  const handleNext = () => {
    if (index >= reviews.length - 1) {
      setIndex(0);
      return;
    }
    setIndex((prev) => prev + 1);
  };

  return (
    <section className='reviews'>
      <div className='container reviews-container'>
        <SectionHead
          title='Reviews'
          icon={<MdOutlineReviews />}
          className='center'
        />
        <Card cardInfo={review} className='reviews-review' />
        <div className='reviews-btns'>
          <button onClick={handlePrev}>
            <IoIosArrowBack />
          </button>
          <button onClick={handleNext}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
}
