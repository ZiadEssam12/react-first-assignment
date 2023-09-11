import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="w-100">
        <div className="footer text-white p-5">
          <div className="container p-5">
            <div class="row row-col-1 row-col-md-3 justify-content-center g-5 text-center">
              <div class="col">
                <div>
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div class="col">
                <div className=" text-center">
                  <h3>AROUND THE WEB</h3>
                  <div className="icons px-4 ms-3 d-flex justify-content-center">
                    <a href="/" className="me-2 rounded-circle border border-1">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="/" className="me-2 rounded-circle border border-1">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="/" className="me-2 rounded-circle border border-1">
                      <i class="fa-brands  fa-linkedin-in"></i>
                    </a>
                    <a href="/" className="me-2 rounded-circle border border-1">
                      <i class="fa-brands fa-dribbble"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div>
                  <h3>ABOUT FREELANCER</h3>
                  <p className="text-center">
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copywright text-center text-white d-flex align-items-center justify-content-center">
          <p className="p-0 m-0">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
