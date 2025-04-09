import "./DisplayCard.css";
import { FaClock, FaGithub, FaInternetExplorer } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";

export default function DisplayCard({ data }) {
  return (
    <div className="Work_Page">
      <section className="Work_Section">
        {data.work.map((item) => {
          const sentences = item.desc.split(/[.!?]\s+/);
          const filteredSentences = sentences.filter(
            (sentence) => sentence.trim() !== ""
          );

          return (
            <div
              key={item.id}
              className={"DC_box" + (item.id % 2 === 0 ? " inverted" : "")}
            >
              <img id="DC_box_img" src={item.img} alt="" />
              <div className="DC_box_content">
                <h3>{item.heading}</h3>
                <p id="DC_box_content_overview">{item.overview}</p>
                <ul>
                  {filteredSentences.map((sentence, index) => (
                    <li key={index}>{sentence}</li>
                  ))}
                </ul>
                <div className="DL_box_content_footer">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.linktype === "github" ? (
                      <FaGithub className="DL_box_icon" />
                    ) : item.linktype === "Website" ? (
                      <FaInternetExplorer className="DL_box_icon" />
                    ) : item.linktype === "Certificate" ? (
                      <PiCertificate className="DL_box_icon" />
                    ) : null}
                  </a>
                  <span className="DL_box_content_footer_duration_wrapper">
                    <FaClock className="DL_box_icon" />
                    <span className="DL_box_content_footer_duration_text">
                      &ensp;{item.duration}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}