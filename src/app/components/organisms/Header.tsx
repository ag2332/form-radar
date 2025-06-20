"use client";
import React, { useState } from "react";
import Grid from "../atoms/Grid";
import Logo from "../../assets/logo.png";
import List from "../atoms/list";
import Section from "../Section";

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

const Header = ({ children, className = "" }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Section>
      <Grid
        columns={2}
        className={
          "fixed top-0 left-0 right-0 px-12 py-3 flex justify-between items-center bg-white w-full z-100"
        }
      >
        <div
          className={`flex items-center gap-2 ${className} ${
            menuOpen ? "open" : ""
          }`}
        >
          <a href="/" className="logo">
            <h1 className="text-5xl items-center">Form Radar</h1>
          </a>
          <img src={Logo.src} alt="Logo" className="max-w-[70px]" />
        </div>
        <div className="hidden lg:block">
          <div>
            <List />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-0.5 pointer-events-none z-30 flex">
            <div
              style={{ backgroundColor: "#000000" }}
              className="w-full h-full"
            />
          </div>
        </div>
      </Grid>
    </Section>
  );
};

export default Header;
