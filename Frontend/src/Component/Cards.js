import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>For Authors & Reviews</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.png"
              text="As per the instructions or specifications of the journal, the authors are expected to prepare their manuscripts."
              label="Open Access Policy"
              path="/policy"
            />
            <CardItem
              src="images/img-2.webp"
              text="The method used to determine the content of a manuscript before it is published, is the peer review process."
              label="Review Policy"
              path="/policy2"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Applications are invited for editorial board, advisory board, and reviewer of the journal.."
              label="Publication Ethics"
              path="/policy3"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="images/img-3.png"
              text="IJRST invites original or unpublished research papers/articles, review articles, etc for publication in our next issue."
              label="Article Correction Policy"
              path="/policy4"
            />
            <CardItem
              src="images/img-5.jpg"
              text="The Journal covers the whole spectrum of all research areas of science and technology."
              label="Plagarism Policy"
              path="/policy5"
            />
            <CardItem
              src="images/img-6.png"
              text="Original and unpublished papers/articles can be submitted online, by email, or by sending a WhatsApp message."
              label="Conflict of Interest"
              path="/policy6"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
