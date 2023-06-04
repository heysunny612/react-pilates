import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export default function FAQ({ faq: { question, answer } }) {
  const [toggle, setToggle] = useState(false);
  return (
    <article className='faq'>
      <div className='faq-q' onClick={() => setToggle((prev) => !prev)}>
        <h4>{question}</h4>
        <button className='faq-icon'>
          {toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {toggle && <p className='faq-a'>{answer}</p>}
    </article>
  );
}
