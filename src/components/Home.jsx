import react from "react";


const element = (
  <div class="position-relative overflow-hidden  p-md-5 m-md-3 text-center bg-body-tertiary" id="home">
     
    <div class="col-md-6 p-lg-5 mx-auto my-5">
    <img src="/images/passportpicture.png" class="bd-placeholder-img rounded-circle" width="140" height="140" alt="Your Image"/>
    
      <h1 class="display-3 fw-bold">Rishabh Verma</h1>
      <p class="lead mb-4">Hi! There, I am a cloud engineer who loves building cool stuff with Python and AWS
When I'm not coding,<br/> You find me lifting weights :)
Wanna Know about me? Check out all the things i did</p>
      <div class="d-flex gap-3 justify-content-center lead fw-normal">
      
      <p class="lead mb-4">And hey, speaking of cool things, did you know this page has been viewed 994 times? Fun fact!</p>
      </div>
     <div class="container text-center ">
    <a href="/images/Rishabh Verma Resume.pdf" target="_blank" class="btn btn-dark ">My Resume</a> 
</div>
     
    </div>
   
  </div>
)

function Home()
{
     return element;
}
export default Home;