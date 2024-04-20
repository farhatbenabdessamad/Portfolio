export default function Projects() {
  return (
    <div>
      <section className="resume-section" id="projects">
        <div className="resume-section-content projects">
          <h2 className="mb-1">Projects</h2>
          <div className="subheading mb-2">Frontend projects</div>
          <h6 style={{ color: "white", textTransform: "lowercase", marginTop: "200px" }}> In progress ...</h6>
          <br />
          <div className="d-flex row">
            <div className="card col-md-3 col-12 mx-2 mb-1" style={{ width: "14rem" }}>
              <img className="card-img-top" src="img/RandomQuotes.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">....</h5>
                <a href="" target="_blank" className="btn btn-primary">Github</a>
                <a href="" target="_blank" className="btn btn-secondary">Demo</a>
              </div>
            </div>
            <div className="card col-md-3 col-12 mx-2 mb-1" style={{ width: "16rem" }}>
              <img className="card-img-top" src="img/StoriesFeed.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">...</h5>
                <a href="" target="_blank" className="btn btn-primary">Github</a>
                <a href="" target="_blank" className="btn btn-secondary">Demo</a>
              </div>
            </div>
            <div className="card col-md-3 col-12 mx-2 mb-1" style={{ width: "14rem" }}>
              <img className="card-img-top" src="img/IDCardGen.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">...</h5>
                <a href="" target="_blank" className="btn btn-primary">Github</a>
                <a href="" target="_blank" className="btn btn-secondary">Demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Interests*/}
      <section className="resume-section" id="interests">
        <div className="resume-section-content">
          <h2 className="mb-5">Interests</h2>
          < p style={{ textAlign: "justify", width: "100%" }}>In my portfolio, I aim to share my passions and interests that shape my daily life and fuel my curiosity for the world around me.
          Reading holds a central place in my life. I love exploring different literary genres, whether it's captivating fiction, enriching non-fiction, boundary-pushing science fiction, or transporting historical novels.
          Traveling is a true source of inspiration and wonder for me. I enjoy discovering new cultures, exploring exotic destinations, and immersing myself in the diversity of the world. Each journey is an opportunity to learn new foreign languages, meet fascinating people, and broaden my horizons.
          As a technology enthusiast, I'm always on the lookout for the latest trends and digital innovations. I enjoy exploring new gadgets, innovative apps, and online platforms that shape our way of life and work.
          Sport is also an integral part of my life. Whether it's running, weightlifting, or other sports activities, I strive to maintain an active and balanced lifestyle. Sport helps me stay physically and mentally fit, while providing me with a sense of well-being and personal fulfillment
          These interests reflect my insatiable curiosity, my desire to discover new things, and my commitment to living a fulfilling and enriching life. I look forward to sharing these passions with you through my portfolio.
          </p>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}
