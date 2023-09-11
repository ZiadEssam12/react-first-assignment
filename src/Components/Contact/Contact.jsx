import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    // Setup or subscribe to something (e.g., event listeners)
    document.querySelector("a[href='/contact']").classList.add("activePage");

    return () => {
      document
        .querySelector("a[href='/contact']")
        .classList.remove("activePage");
    };
  }, []);

  function labelAnimaiton(element) {
    let parentDiv = element.target.parentElement;
    let label = parentDiv.querySelector("label");

    if (element.target.value.length > 0) {
      label.classList.add("active");
    } else if (element.target.value.length === 0) {
      label.classList.remove("active");
    }
  }
  return (
    <div className="Contact section text-black align-items-stretch">
      <div className="header mb-5 pb-3">
        <h2 className="text-center title-dark">CONATCT SECTION</h2>
        <div className="seperator d-flex justify-content-center align-items-center my-2 p-1 text-center">
          <div className="line dark-line"></div>
          <div className="mx-3">
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="line dark-line"></div>
        </div>
      </div>

      <div className="pt-5 w-50 mx-auto">
        <div className="container d-flex flex-column">
          <div className="d-flex flex-column position-relative">
            <label
              htmlFor="userName"
              className="ms-2 ps-1 position-absolute z-1 "
            >
              user Name:
            </label>
            <input
              className="form-control border-0 border-bottom w-100 position-relative z-2"
              placeholder="user Name"
              type="text"
              onInput={(e) => labelAnimaiton(e)}
              id="userName"
            />
          </div>

          <div className="d-flex flex-column position-relative mt-5">
            <label
              htmlFor="userAge"
              className="ms-2 ps-1 position-absolute z-1"
            >
              userAge
            </label>
            <input
              className="form-control border-0 border-bottom w-100 position-relative z-2"
              placeholder="user Age"
              type="text"
              onInput={(e) => labelAnimaiton(e)}
              id="userAge"
            />
          </div>

          <div className="d-flex flex-column position-relative mt-5">
            <label
              htmlFor="userEmail"
              className="ms-2 ps-1 position-absolute z-1"
            >
              userEmail
            </label>
            <input
              className="form-control border-0 border-bottom w-100 position-relative z-2"
              placeholder="user Email"
              type="email"
              onInput={(e) => labelAnimaiton(e)}
              id="userEmail"
            />
          </div>

          <div className="d-flex flex-column position-relative mt-5">
            <label
              htmlFor="userPassword"
              className="ms-2 ps-1 position-absolute z-1"
            >
              userPassword
            </label>
            <input
              className="form-control border-0 border-bottom w-100 position-relative z-2"
              placeholder="user password"
              type="password"
              onInput={(e) => labelAnimaiton(e)}
              id="userPassword"
            />
          </div>

          <button className="rounded-2 text-white p-1 mt-4">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
