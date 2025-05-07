import "./Tutorials.css"
const Tutorials = () => {

    const tutorials = [
      { title: 'WhatsApp Basics', image: '📱', video: 'https://www.youtube.com/watch?v=dd-5Rc6WT94'},
      { title: 'How to use Paytm', image: '💸', video: 'https://www.youtube.com/watch?v=4GlMPJs5Wu4&t=28s' },
      { title: 'Google Maps Guide', image: '🗺️', video: 'https://www.youtube.com/watch?v=QULMYsdWXpU' },
      { title: 'Google Pay Guide', image: '💰', video: 'https://www.youtube.com/watch?v=-Ougj4el-2g' },
      { title: 'Instagram Guide', image: '📸', video: 'https://www.youtube.com/watch?v=ksFH1Ka8Nuo' },
      { title: 'Youtube Guide', image: '🎥', video: 'https://www.youtube.com/watch?v=p4J44m2IG6o' },
      { title: 'LinkedIn Guide', image: '💼', video: 'https://www.youtube.com/watch?v=nwzPMcosMYo' },
      { title: 'FaceBook Guide', image: '👥', video: 'https://www.youtube.com/watch?v=BPE6G2kub8Q' }
    ];
  
    return (
      <div className="tutorials">
        <h2 className="section-title">Tutorials</h2>
        <div className="tutorial-grid">
          {tutorials.map((tut, idx) => (
            <div key={idx} className="tutorial-card">
              <div className="tutorial-icon">{tut.image}</div>
              <h3 className="tutorial-title">{tut.title}</h3>
              <a href={tut.video} target="_blank"><button className="submit-button">Watch Tutorial</button></a>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Tutorials