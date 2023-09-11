import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="position-fixed z-3 top-0 start-0 w-100">
        <nav className="navbar navbar-expand-lg">
          <div className="container py-3">
            <Link className="navbar-brand fs-2 fw-bolder" to={"/"}>
              START FRAMEWORK
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item me-3">
                  <Link
                    className="nav-link p-2 rounded-3"
                    aria-current="page"
                    to={"about"}
                  >
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item me-3">
                  <Link className="nav-link p-2 p-lg-2 rounded-3" to={"portfolio"}>
                    PORTFOLIO
                  </Link>
                </li>

                <li className="nav-item me-3">
                  <Link className="nav-link p-2 rounded-3" to={"contact"}>
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
{
  /* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      Navbar
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>; */
}
