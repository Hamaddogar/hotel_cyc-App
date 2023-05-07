import React from "react";

function TouristInfoCards() {
  return (
    <div className="container">
      <div className="card">
        <img
          src="https://images.pexels.com/photos/3061345/pexels-photo-3061345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="card-img-top"
        />
        <div className="card-body">
          <h4>Glasgow</h4>
          <p>
            Glasgow is a vibrant city in Scotland known for its friendly people,
            rich history, beautiful architecture, and lively arts and culture
            scene.
          </p>
          <a href="https://visitlondon.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://media.istockphoto.com/id/178490368/photo/media-city.jpg?b=1&s=612x612&w=0&k=20&c=WhbmGTEpXBh7lu3E77xhdx9m_IsROPul8K4R1jxQlK0="
          className="card-img-top"
        />
        <div className="card-body">
          <h4>Manchester</h4>
          <p>
            Manchester is a bustling city in northwest England known for its
            industrial heritage, music scene, sports teams, and diverse cultural
            offerings.
          </p>
          <a href="https://visitmanchester.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg?auto=compress&cs=tinysrgb&w=800"
          className="card-img-top"
        />
        <div className="card-body">
          <h4>London</h4>
          <p>
            London is the capital and largest city of England and the United
            Kingdom, known for its iconic landmarks, rich history, and cultural
            diversity.
          </p>
          <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
