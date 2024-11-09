import React from "react";
import { useTrail, animated, useSpring } from "@react-spring/web";
import { InView, useInView } from "react-intersection-observer";
import Card from "./card";

const myCards = [
  { title: "C++", text: "Solved over 500+ LeetCode", classKaName: "text-bg-dark" },
  { title: "AWS", text: "1 Year Hands on Experience on AWS", classKaName: "text-bg-dark" },
  { title: "React", text: "1 Year+ Hands on Experience on React", classKaName: "text-bg-dark" },
  { title: "GitHub", text: "Implement CI/CD using Github actions", classKaName: "" },
  { title: "Postgre SQL", text: "Work on Postgre SQL/ Have hands on experience of 2 months", classKaName: "" },
  { title: "Terraform", text: "Proficient in using Terraform for infrastructure as code and automated provisioning.", classKaName: "" },
  { title: "Unity", text: "Create over 30+ Games using Unity and C#", classKaName: "text-bg-dark" },
  { title: "Express", text: "Developed RESTful APIs using Express.js for seamless server-side functionality and efficient data handling", classKaName: "text-bg-dark" },
  { title: "Machine Learning", text: "Develop Ml models on Unity Game Engine", classKaName: "text-bg-dark" }
];








function Skills() {
  const [ref,inView] = useInView({
    threshold:0.2,
    triggerOnce: true,
  })
  const skillStyle = useSpring({
     opacity: inView? 1:0,
     config: { tension: 100, friction: 60 }
  })

  const trail = useTrail(myCards.length, {
    opacity: inView? 1:0,
    config: { tension: 100, friction: 66 },
    delay: 1000,
  });
  

  return (
    <div className="bg-body-tertiary " id="skills" >
      <animated.h1 style={skillStyle} className="text-center  mb-0"  ref={ref}>-Skills-</animated.h1>
      <div className="row g-4 py-1 row-cols-1 row-cols-lg-3">
        {trail.map((styles, index) => (
          <animated.div style={styles} key={index} >
            <Card
              title={myCards[index].title}
              text={myCards[index].text}
              classKaName={myCards[index].classKaName}
            />
          </animated.div>
        ))}
      </div>
    </div>

  );
}
export default Skills;