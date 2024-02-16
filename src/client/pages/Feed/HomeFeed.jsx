import React from "react";
import Post from "../../components/Post";
import { Grid, useBreakpointValue } from "@chakra-ui/react";
import CreatePost from "../../components/CreatePost";
import { useLoaderData } from "react-router-dom";
export async function loader() {
  const data = await fetch("/api/v1/job/post");
  const resp = await data.json();
  // console.log(resp);
  return resp;
}
function HomeFeed() {
  const data = useLoaderData();
  const isMobile = useBreakpointValue({ base: true, sm: false });
  // console.log(data);
  return (
    <Grid p={10} templateColumns={["1fr", "1fr", "1fr 1fr"]}>
      <CreatePost />
      <Grid
        justifyItems={"end"}
        p={5}
        templateColumns={
          isMobile ? "1fr" : ["repeat(1, 1fr)", "repeat(1, 1fr)"]
        }
        gap={6}>
        {data || data.length > 0
          ? data.map((item) => {
              return <Post key={item._id} data={item} />;
            })
          : null}
      </Grid>
    </Grid>
  );
}

export default HomeFeed;
