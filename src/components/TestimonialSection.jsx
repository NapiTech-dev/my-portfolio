import React from "react";
import "../styles/TestimonialSection.css";
import image from "../assets/images/man-image.jpeg";

function TestimonialSection() {
  const testimonies = [
    {
      name: "Kofi",
      summary: `"The best software developer I have ever worked with, I will recommend him to anyone"`,
    },
    {
      name: "Kofi",
      summary: `"The best software developer I have ever worked with, I will recommend him to anyone"`,
    },
  ];

  return (
    <div className="testimonial-section">
      <h2 className="testmony-title">Testimonials</h2>
      <div className="testimonies-box">
        {testimonies.map((testimony, index) => (
          <div className="testimony-box" key={index}>
            <div className="tesimony-image-box">
              <div className="testimony-image-background">
                <img src={image} alt="" />
              </div>
            </div>
            <div className="testimony-title">{testimony.name}</div>
            <div className="testimony-details-box">
              <p className="testimony-text">{testimony.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSection;
