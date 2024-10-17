import react from "react";
import reactDom from "react-dom";

const element = (
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Rishabh Verma Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
      
        <li class="nav-item">
          <a class="nav-link" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Certifications">Certifications</a>
        </li>
       
     
      </ul>
      
    </div>
  </div>
</nav>
)
function NavBarfunction()
{
     return element;
}
export default NavBarfunction;
