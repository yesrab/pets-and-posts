import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
function LandingPageLayout() {
  return (
    <main>
      <Flex justifyContent={"center"} as={"nav"}>
        <Heading>My pets stories</Heading>
      </Flex>
      <Outlet />
    </main>
  );
}

export default LandingPageLayout;
