import React from "react";
import { Container, Heading, Message } from "./not-found-page.styles";

const NotFoundPage = () => {
  return (
    <Container>
      <Heading>404 - Page Not Found</Heading>
      <Message>Sorry, the page you are looking for does not exist.</Message>
    </Container>
  );
};

export default NotFoundPage;
