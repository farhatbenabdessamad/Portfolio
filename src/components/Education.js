export default function Education() {
  return (
    <div>
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Gomycode</h3>
              <div className="subheading mb-3">Full Stack Web Developer Bootcamp</div>
              <div>
                Graduated from a computer science course, during which I completed an internship where I developed a web platform using various MERN tools.
              </div>
              <p>Percentage: Maintained an average above 80% throughout the entire course.</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">December 2023 - April 2024</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">
                University Tunis El Manar
              </h3>
              <div className="subheading mb-3">Doctoral thesis in economics </div>
              <div>
                Graduated with a Doctorate in Economics, specializing in Development Economics.
              </div>
              <p>Percentage: Maintained an average above 70%, with a grade of 'very honorable'.</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">September 2017 - June 2023</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}
