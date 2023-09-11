import React, { useEffect } from "react";
import img1 from "../images/poert1.png";
import img2 from "../images/port2.png";
import img3 from "../images/port3.png";

function Portfolio() {
  useEffect(() => {
    // Setup or subscribe to something (e.g., event listeners)
    document.querySelector("a[href='/portfolio']").classList.add("activePage");

    return () => {
      document
        .querySelector("a[href='/portfolio']")
        .classList.remove("activePage");
    };
  }, []);
  const div = document.querySelectorAll(".portfolio .row .col div");

  function showModal(img) {
    const dialog = document.querySelector("#dialog");
    const dialogImg = document
      .querySelector("#dialog img")
      .setAttribute("src", img);
    dialog.showModal();
  }

  function closeModal(e) {
    if (!e.target.getAttribute("src")) {
      const dialog = document.querySelector("#dialog");
      dialog.close();
    }
  }
  return (
    <>
      <div className="portfolio py-4">
        <div className="portfolio-header header">
          <h2 className="text-center">PORTFOLIO COMPONENT</h2>
          <div className="seperator d-flex justify-content-center align-items-center my-2 p-1 text-center">
            <div className="line dark-line"></div>
            <div className="mx-3">
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="line dark-line"></div>
          </div>
        </div>

        <div className="container">
          <div class="row row-cols-1 row-cols-md-3 justify-content-center align-items-center g-5">
            <div class="col">
              <div
                className="position-relative d-flex justify-content-center align-items-center"
                onClick={() => showModal(img1)}
              >
                <img src={img1} alt="image 1" className="w-100 rounded-3" />
                <div className="layer">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                className="position-relative d-flex justify-content-center align-items-center"
                onClick={() => showModal(img2)}
              >
                <img src={img2} alt="image 2" className="w-100 rounded-3" />
                <div className="layer">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                className="position-relative d-flex justify-content-center align-items-center"
                onClick={() => showModal(img3)}
              >
                <img src={img3} alt="image 3" className="w-100 rounded-3" />
                <div className="layer">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                className="position-relative d-flex justify-content-center align-items-center"
                onClick={() => showModal(img1)}
              >
                <img src={img1} alt="image 1" className="w-100 rounded-3" />
                <div className="layer">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                className="position-relative d-flex justify-content-center align-items-center"
                onClick={() => showModal(img2)}
              >
                <img src={img2} alt="image 2" className="w-100 rounded-3" />
                <div className="layer">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                className="position-relative d-flex justify-content-center align-items-center"
                onClick={() => showModal(img3)}
              >
                <img src={img3} alt="image 3" className="w-100 rounded-3" />
                <div className="layer">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <dialog
          id="dialog"
          className="p-0 border-0"
          onClick={(e) => closeModal(e)}
        >
          <img src={img1} alt="" className="w-100" />
        </dialog>
      </div>
    </>
  );
}

export default Portfolio;
