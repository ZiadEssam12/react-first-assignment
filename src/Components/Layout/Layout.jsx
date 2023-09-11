import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  useEffect(() => {
    const handleResize = () => {
      document.querySelectorAll(".section").forEach((section) => {
        const headerHeight = document.querySelector("header").clientHeight;
        section.style.marginTop = `${headerHeight}px`;
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const location = useLocation();

  useEffect(() => {
    const pageTitle = getPageTitle(location);
    document.title = pageTitle;
  }, [location]);
  function getPageTitle(location) {
    switch (location.pathname) {
      case "/home":
        addActiveToLink("home");
        return "Home";
      case "/about":
        addActiveToLink("about");
        return "About";
      case "/portfolio":
        addActiveToLink("portfolio");
        return "Portfolio";
      case "/contact":
        addActiveToLink("contact");
        return "Contact";
      default:
        addActiveToLink("404");
        return "404 Not Found";
    }
  }

  function addActiveToLink(element) {
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    if (element != "home" && element != "404") {
      let elementSelector = document.querySelector(`a[href="/${element}"]`);
      elementSelector.classList.add("active");
    }
  }
  return (
    <>
      <div className="d-flex flex-column justify-content-between align-items-center">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
