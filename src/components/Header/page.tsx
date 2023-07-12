"use client";

import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

const Header = () => {
  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 8px;
    h1 {
      color: rgb(59 130 246);
    }
    nav {
      a {
        color: rgb(107 114 128);
        font-weight: 600;
        padding: 8px;
        :hover {
          color: #a1e76fe8;
        }
      }
    }
  `;
  return (
    <>
      <Header>
        <h1>{"z9inn's Blog"}</h1>
        <nav>
          <Link href="/developer">DEVELOPER</Link>
          <Link href="/life">LIFE</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>
      </Header>
    </>
  );
};

export default Header;
