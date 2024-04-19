
import image from "../assets/monimage.png"
export default function About() {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content" style={{ marginTop: "0px" }}>
        <div id="Myname" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h1 className="mb-0" style={{ color: "white", fontFamily: "Courier New, monospace" }}>
            Farhat
            <span className="text-primary">  Ben Abdessamad</span>
          </h1>
          <img
            className="img-fluid img-profile  mx-auto mb-2"
            src={image}
            alt=""
          />
        </div>


        <div className="subheading mb-5">Full Stack Web Developer (JavaScript, MERN) & Ph.D. in Economics - Tunisia</div>

        <p className="lead mb-5">
          With a specialization in both web development and economic development, I bring a wealth of experience to the table. My expertise lies in crafting dynamic websites, building hybrid mobile applications, and architecting robust backend solutions. Having worked in both corporate giants and burgeoning startups, I possess a well-rounded understanding of the product development landscape. This unique perspective enables me to make meaningful contributions to businesses of all sizes, at every stage of their journey.
        </p>
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/farhat-ben-abdessamad/"
          >
            <i style={{ color: "black" }} className="fab fa-linkedin-in" />
          </a>
          <a className="social-icon" href="https://github.com/farhatbenabdessamad">
            <i style={{ color: "black" }} className="fab fa-github" />
          </a>
          <a className="social-icon" href="https://twitter.com/FarhatBENABDES1">
            <i style={{ color: "black" }} className="fab fa-twitter" />
          </a>
          <a
            className="social-icon"
            href="https://www.youtube.com"
          >
            <i style={{ color: "black" }} className="fab fa-youtube" />
          </a>

        </div>
        <div className="social-icons" style={{marginTop:"50px"}}>
          <p>
           <span className="social-icon"> <i style={{ color: "black" }} className="fa-solid fa-envelope"></i></span> Email : farhat.benabdessamad@fsegt.utm.tn
          </p>
          <p>
          <span className="social-icon"> <i style={{ color: "black" }} className="fa-solid fa-phone"></i></span> phone number : +216 52 421 629
          </p>
        </div>
      </div>
    </section>
  );
}