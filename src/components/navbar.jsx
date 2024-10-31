import react from "react";
import reactDom from "react-dom";

const element = (
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Rishabh Verma Portfolio</a>
      <div class="btn-group">
        <button type="button" class="btn btn-secondary dropdown-toggle bg-dark" data-bs-toggle="dropdown" aria-expanded="false">
          menu
        </button>
        <ul class="dropdown-menu dropdown-menu-end text-center bg-dark text-white">
          <li class="nav-item">
            <a class="nav-link border-bottom " href="#projects"><b>Projects</b></a>
          </li>
          <li class="nav-item">
            <a class="nav-link border-bottom" href="#skills"><b>Skills</b></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Certifications"><b>Certifications</b></a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
)
function NavBarfunction() {
  return element;
}
export default NavBarfunction;
