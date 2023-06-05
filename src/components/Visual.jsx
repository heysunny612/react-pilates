export default function Visual({ title, image, children }) {
  return (
    <article
      className='page-visual'
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='container visual-container'>
        <div className='visual-bg'></div>
        <div className='visual-content'>
          <h2>{title}</h2>
          <p> {children}</p>
        </div>
      </div>
    </article>
  );
}
