import { useEffect, useRef } from "react";
import Layout from "../component/layout";
import Container from "../component/shared/container";
import Message from "../component/shared/message";
import { useMessages } from "../hooks/message";

const Home = () => {
  const { messages } = useMessages();

  console.log(messages);

  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-4 pt-4">
          {messages.map(({ message, isUser }, index: number) => (
            <Message key={index} isUser={isUser || false}>
              {message}
            </Message>
          ))}
        </div>
        <AlwaysScrollToBottom />
      </Container>
    </Layout>
  );
};

const AlwaysScrollToBottom = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView();
    }
  }, []);
  return <div ref={elementRef} />;
};

export default Home;
