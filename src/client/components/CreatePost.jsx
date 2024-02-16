import React from "react";
import { Form } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  Textarea,
  RadioGroup,
  HStack,
  Radio,
  Button,
  Heading,
} from "@chakra-ui/react";
export async function action({ params, request }) {
  const action = "/api/v1/job/post";
  const FormData = await request.formData();
  const formObj = {};
  for (const val of FormData.entries()) {
    formObj[val[0]] = val[1];
  }
  // console.log(formObj);
  const newRequest = new Request(action, {
    method: "POST",
    body: JSON.stringify(formObj),
    headers: { "Content-Type": "application/json" },
  });
  const postThePost = await fetch(newRequest);
  if (postThePost.status === 200) {
    location.reload();
  }
  return null;
}
function CreatePost() {
  return (
    <div>
      <Heading size='md'>Create a post!</Heading>
      <Form method='post'>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input name='Name' type='text' />
          <FormHelperText>what other people will see you as</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input name='Email' type='email' />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Post</FormLabel>
          <Textarea name='Post' resize='none' type='text' />
          <FormHelperText>Let use hear your thoughts </FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel as='legend'>What breed are you?</FormLabel>
          <RadioGroup name='Breed' defaultValue='Cat'>
            <HStack spacing='24px'>
              <Radio value='Cat'>Cat</Radio>
              <Radio value='Dog'>Dog</Radio>
            </HStack>
          </RadioGroup>
          <FormHelperText>Let us know your fav breed</FormHelperText>
        </FormControl>
        <Button
          mt={4}
          colorScheme='teal'
          // isLoading={props.isSubmitting}
          type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreatePost;
