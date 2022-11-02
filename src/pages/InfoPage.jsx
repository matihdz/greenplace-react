import { Box } from "@mui/material";
import { posts } from "../apis/postsApi";
import PostCard from "../components/PostCard";

export const InfoPage = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {posts.map((post) => (
        <PostCard key={post?.id} {...post} />
      ))}
    </Box>
  );
};
