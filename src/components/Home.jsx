import React, { useState, useEffect } from 'react';

function VisitCount() {
  const [count, setCount] = useState(0);
  const ApiUrl = "https://rzg5amkfsj.execute-api.ap-south-1.amazonaws.com/prod";
  useEffect(() => {
    // Fetch data inside useEffect to avoid multiple fetches on each render
    fetch(ApiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('API response:', data);
        setCount(data); // Assuming the count is in the 'count' property
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <span className='fw-bold'>{count}</span>
  )
}

const element = (
  <div class="position-relative overflow-hidden  p-md-5 m-md-3 text-center bg-body-tertiary" id="home">
     
    <div class="col-md-6 p-lg-5 mx-auto my-5">
    <img src="/images/passportpicture.png" class="bd-placeholder-img rounded-circle" width="140" height="140" alt="Your Image"/>
    
      <h1 class="display-3 fw-bold">Rishabh Verma</h1>
      <div className="border border-top-0">

    
      <p class="lead mb-4 ">Hi! There, I am a Full Stack Developer who loves building cool stuff.<br/>
When I'm not coding You find me lifting weights :)
Wanna Know about me? Check out all the things i did</p>
      <div class="d-flex gap-3 justify-content-center lead fw-normal">
      
      <p class="lead mb-4">And hey, speaking of cool things, did you know this page has been viewed <VisitCount/> times? Fun fact!</p>
      </div>
   
     <div class="text-center grid gap-6 ">
    <a href="/images/Rishabh Verma Resume.pdf" target="_blank" class="btn btn-dark mb-3">My Resume</a> 
    <a href="https://x.com/Rishabh45532352" ><img src="/images/twitterLogo.png" height = "32" width="32"className="mb-3 me-2 ms-2 "  /></a>
    <a href="https://github.com/RishabhVerma35" ><img src="/images/github logo.png" height = "42" width="42"className="mb-3 me-2  "  /></a>

</div>
</div>
    </div>
   
  </div>
)

function Home()
{
     return element;
}
export default Home;