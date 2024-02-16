import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Flex,
  Avatar,
  Box,
  Heading,
  IconButton,
  Button,
  AccordionButton,
  Accordion,
  AccordionItem,
  AccordionPanel,
  Textarea,
  Spacer,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiChat } from "react-icons/bi";
import UserComments from "./UserComments";

export default function Post({ data }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  return (
    <Card
      maxH={isAccordionOpen || data.Post.length > 200 ? "none" : "250px"}
      w='100%'>
      <CardHeader>
        <Flex spacing='4'>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar
              name={data.Name}
              src={
                data.Breed === "Cat"
                  ? "https://upload.wikimedia.org/wikipedia/commons/2/2b/Black_Cat_Vector.svg"
                  : "https://upload.wikimedia.org/wikipedia/commons/8/89/Dog.svg"
              }
            />
            <Box>
              <Heading size='sm'>{data.Name}</Heading>
              <Text>{data.Breed}</Text>
            </Box>
          </Flex>
          <IconButton
            variant='ghost'
            colorScheme='gray'
            aria-label='See menu'
            icon={<BsThreeDotsVertical />}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{data.Post}</Text>
      </CardBody>

      <CardFooter
        flex={1}
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}>
        <Accordion width='100%' allowToggle>
          <AccordionItem>
            <AccordionButton
              as={Button}
              flex='1'
              textAlign='left'
              variant='ghost'
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
              Comments <Spacer /> <BiChat />
            </AccordionButton>
            <AccordionPanel display={"flex"} flexDir='column'>
              <UserComments id={data._id} usercomments={data.comments} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </CardFooter>
    </Card>
  );
}
