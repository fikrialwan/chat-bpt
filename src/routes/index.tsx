import { useEffect, useRef } from "react";
import Layout from "../component/layout";
import Container from "../component/shared/container";
import Message from "../component/shared/message";
import { dummyMessage } from "../data/dummy-message";

const Home = () => {
  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-4">
          {dummyMessage.map(({ message, isUser }) => (
            <Message isUser={isUser || false}>{message}</Message>
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
