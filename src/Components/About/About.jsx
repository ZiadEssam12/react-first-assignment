import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    // Setup or subscribe to something (e.g., event listeners)
    document.querySelector("a[href='/about']").classList.add("activePage");

    return () => {
      document.querySelector("a[href='/about']").classList.remove("activePage");
    };
  }, []);
  return (
    <>
      <div className="section about header">
        <h2 className="section-title">ABOUT COMPONENT</h2>
        <div className="seperator d-flex justify-content-center align-items-center my-2 text-center">
          <div className="line bg-white"></div>
          <div className="mx-3">
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="line bg-white"></div>
        </div>
        <div className="container">
          <div class="row row-cols-1 row-cols-md-2 justify-content-center align-items-center px-5">
            <div class="col ps-0 ps-lg-5">
              <div>
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
            <div class="col ps-0 pe-0 pe-lg-5">
              <div>
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
