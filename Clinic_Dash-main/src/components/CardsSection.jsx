import React, { useState } from "react";
import card1 from "../assets/nasya.jpg";
import card2 from "../assets/basti.jpg";
import card3 from "../assets/raktmoksh.jpg";
import card4 from "../assets/virechana.png";
import card5 from "../assets/vamana.jpg";
import "./CardSection.css";

export default function CardsSection() {
  const cards = [
    {
      id: 1,
      title: "Nasya",
      description: "A rejuvenating Panchakarma therapy focusing on nasal detox and mental clarity.",
      tool: "Nasal applicator or dropper",
      use: "Delivers medicated oils directly into the nasal passages for purification.",
      image: card1,
    },
    {
      id: 2,
      title: "Basti",
      description: "A cleansing therapy that removes deep-seated toxins from the colon using herbal oils.",
      tool: "Basti syringe / enema nozzle (Netra)",
      use: "Administers herbal oils or decoctions into the colon for deep detoxification.",
      image: card2,
    },
    {
      id: 3,
      title: "Raktamokshana",
      description: "Purifies the blood and improves circulation through Ayurvedic bloodletting techniques.",
      tool: "Surgical needle / vacuum cups",
      use: "Removes stagnant or impure blood to purify circulation.",
      image: card3,
    },
    {
      id: 4,
      title: "Virechana",
      description: "A therapeutic purgation that helps cleanse the liver and digestive tract.",
      tool: "Herbal purgation formulas",
      use: "Induces controlled purgation to cleanse the liver & digestion.",
      image: card4,
    },
    {
      id: 5,
      title: "Vamana",
      description: "A detoxification therapy to remove excess Kapha and improve respiratory health.",
      tool: "Emetic herbal preparation bowl",
      use: "Administers herbs that trigger therapeutic vomiting to expel excess Kapha.",
      image: card5,
    },
  ];

  const [flipped, setFlipped] = useState(null);

  return (
    <div className="cards-grid">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`flip-card ${flipped === card.id ? "flipped" : ""}`}

        >
          <div className="flip-inner">

            {/* FRONT SIDE */}
            <div className="flip-front">
              <article className="card">
                <div className="card-media">
                  <img src={card.image} alt={card.title} />
                </div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.description}</p>
                <button className="btn-small"
                  onClick={() => setFlipped(card.id)}
                >
                  Learn more
                </button>
              </article>
            </div>

            {/* BACK SIDE */}
            <div className="flip-back">
              <article className="card back-card">
                <h3>{card.title} — Tools & Usage</h3>
                <p><b>Tool:</b> {card.tool}</p>
                <p><b>Use:</b> {card.use}</p>

                <button className="btn-small"
                  onClick={() => setFlipped(null)}
                >
                  Back
                </button>
              </article>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}