import { React, useEffect, useState } from "react";
import "../styles/projectStyle.css";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from "react-intersection-observer";



function Project() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  })
  const springStyles = useSpring({
    opacity: inView ? 1 : 0,                // Fade in when in view
    transform: inView ? 'translateY(0)' : 'translateY(50px)',  // Move up when in view
    config: { tension: 30, friction: 26 },  //  animation smoothness
  });
  

  return (
    <div id="projects" className=" bg-body-tertiary" ref={ref}>
      <h1 className="text-center">-Projects-</h1>

      <div className="d-md-flex flex-md-equal w-100 mt-2 mb-5 ps-md-3">

        <a href="https://github.com/RishabhVerma35/Portfolio" className="link-underline link-underline-opacity-0">

          <animated.div className="myProject text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden border" style ={springStyles}>
            <div className="my-3 py-3">
              <h2 className="display-5">Visitor Count System With DynamoDB </h2>
            </div>
          </animated.div>

        </a>

        <a href="https://github.com/RishabhVerma35/CryptoTop10" className="link-underline link-underline-opacity-0 link-dark">
          <animated.div className="myProject bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden border border-dark-subtle" style ={springStyles}>
            <div className="my-3 p-3">
              <h2 className="display-5">API Data Fetecher And Storage </h2>
            </div>
          </animated.div>
        </a>

      </div>

    </div>
  )
}
export default Project;