import Visual from '../../components/Visual';
import './gallery.css';
import { gallery } from '../../data';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { useBodyScrollLock } from '../../hooks/useLockBodyScroll';

export default function Gallery() {
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(null);
  const { lockScroll, unLockScroll } = useBodyScrollLock();
  const handleModal = (idx) => {
    setModal((prev) => !prev);
    setIndex(idx);
    modal ? unLockScroll() : lockScroll();
  };
  const handleButton = (target) => {
    switch (target) {
      case 'prev':
        if (index <= 0) {
          setIndex(gallery.length - 1);
          return;
        }
        setIndex(index - 1);
        break;
      case 'next':
        if (index >= gallery.length - 1) {
          setIndex(0);
          return;
        }
        setIndex(index + 1);
        break;

      case 'close':
        setModal(false);
        unLockScroll();
        break;
    }
  };
  return (
    <>
      <Visual
        title='Our Gallery'
        image='https://plus.unsplash.com/premium_photo-1672039297160-2b0b5143a510?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8JUVDJTlBJTk0JUVBJUIwJTgwfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
      >
        저희는 따로 블로그 체험단, 리뷰체험단 등의 허위광고에 일절 투자하지
        않아요. 우리 회원님들의 100% 리뷰! 필라테스 사진을 모아봤어요
      </Visual>
      <section className='container pages'>
        <div className='gallery-container'>
          {gallery.map((g, idx) => (
            <article key={idx}>
              <div className='modal-img' onClick={() => handleModal(idx)}>
                <img src={g} alt='갤러리사진' />
              </div>
            </article>
          ))}

          {modal && (
            <>
              <div className='modal-box'>
                <div>
                  <img src={gallery[index]} alt='갤러리사진' />
                </div>
                <div className='modal-buttons'>
                  <button onClick={() => handleButton('prev')} className='prev'>
                    <MdArrowBackIosNew />
                  </button>
                  <button onClick={() => handleButton('next')} className='next'>
                    <MdArrowForwardIos />
                  </button>
                  <button
                    className='close'
                    onClick={() => handleButton('close')}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              </div>
              <div className='modal-bg' onClick={handleModal}></div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
