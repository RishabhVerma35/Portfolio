import React from "react";
import { useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

function CertificatePlaceHolder(props) {
  const filePath = "/images/Certifications/" + props.fileName;
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="card-text">{props.text}</h4>
          <a href={filePath} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
            View
          </a>
        </div>
      </div>
    </div>
  );
}

function Certificate() {
  const certificates = [
    { text: "AWS Cloud Foundation", fileName: "AWS_Foundation.pdf" },
    { text: "AWS Academy Cloud Architecting", fileName: "AWS_Architect.pdf" },
    { text: "Wipro Java", fileName: "Wipro_TalentNext.pdf" },
    { text: "Programming Essentials C++", fileName: "Programming_EssentialsC++.pdf" },
    { text: "Programming Essentials C", fileName: "Programming_EssentialsC.pdf" },
    { text: "Cybersecurity Introduction", fileName: "CyberSecurityIntroduction.pdf" },
    { text: "Cybersecurity Essential", fileName: "CybersecurityEssential.pdf" },
  ];

  // Detect when the section is in view
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Trail animation for each certificate card
  const trail = useTrail(certificates.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(20px)",
    config: { tension: 170, friction: 26 },
  });

  return (
    <div className="bg-body-tertiary mb-2 mt-5" id="Certifications" ref={ref}>
      <h1 className="text-center pb-2">-Certifications-</h1>

      <div className="row row-cols-sm-2 row-cols-md-3 g-3">
        {trail.map((styles, index) => (
          <animated.div style={styles} key={index}>
            <CertificatePlaceHolder
              text={certificates[index].text}
              fileName={certificates[index].fileName}
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
