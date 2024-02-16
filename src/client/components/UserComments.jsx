import React, { useState, useEffect } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
function UserComments({ usercomments, id }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  // console.log(usercomments);
  useEffect(() => {
    setComments(usercomments);
    return () => {
      null;
    };
  }, []);

  const handleAddComment = async () => {
    if (newComment.trim() !== "") {
      const newCommentObj = {
        comment: newComment,
        user: "Anonymous",
        postId: id,
      };
      const newRequest = new Request("/api/v1/userComments/comment", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCommentObj),
      });
      try {
        const data = await fetch(newRequest);
        console.log(data);
        const responce = data.json();
        setComments([...comments, newCommentObj]);
        setNewComment("");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <VStack spacing={4} align='stretch'>
      <FormControl>
        <FormLabel>Add a comment:</FormLabel>
        <Input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder='Type your comment here'
        />
      </FormControl>
      <Button onClick={handleAddComment}>Add Comment</Button>
      <Text fontSize='lg' fontWeight='bold'>
        Comments:
      </Text>
      {comments.length === 0 ? (
        <Text>No comments yet.</Text>
      ) : (
        comments.map((comment, index) => (
          <Text key={index}>{comment.user + ": " + comment.comment}</Text>
        ))
      )}
    </VStack>
  );
}

export default UserComments;
