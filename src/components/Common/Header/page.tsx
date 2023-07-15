"use client";

import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background-color: #fff;
  border-bottom: 2px solid #e5e7eb;
  h2 {
    color: rgb(59 130 246);
  }
  nav {
    padding-top: 3px;
    a {
      color: rgb(107 114 128);
      font-weight: 600;
      padding: 8px;
      &:hover {
        opacity: 50%;
      }
    }
  }
`;
const Header = () => {
  return (
    <>
      <StyledHeader>
        <Link href="/">
          <h2>{"z9inn's Blog"}</h2>
        </Link>
        <nav>
          <Link href="/developer">DEVELOPER</Link>
          <Link href="/life">LIFE</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>
      </StyledHeader>
    </>
  );
};

export default Header;
