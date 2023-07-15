"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

const StyledImage = styled(Image)`
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 30px;
`;
const Profile = () => {
  return (
    <>
      <Link href="/contact">
        <StyledImage
          className="styled-image"
          src="/images/dog.png"
          alt="profile"
          width={100}
          height={100}
        />
      </Link>
    </>
  );
};

export default Profile;
