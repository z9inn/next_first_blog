"use client";

import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 0;
  color: rgb(107 114 128);
`;

const Container = styled.div`
  height: 50px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  nav {
    a {
      padding: 0 8px;
      &:hover {
        opacity: 50%;
      }
    }
  }
`;

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Container>
          <span>{`© 2023 z9inn's Log. All Rights Reserved.`}</span>
          <nav>
            <Link href={"a"}>Portfolio</Link>
            <Link href={"a"}>Github</Link>
            <Link href={"a"}>Contract</Link>
          </nav>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Footer;
