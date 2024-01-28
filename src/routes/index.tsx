import { useEffect, useRef } from "react";
import Layout from "../components/layout";
import Container from "../components/shared/container";
import Message from "../components/shared/message";
import { useMessages } from "../hooks/message";
import { LOGIN_FLAG, STATUS } from "../config/constants";
import { accessTokenLocalstorage } from "../utils/localstorage";
import { useNavigate } from "react-router-dom";
import Alert from "../components/ui/alert";

const Home = () => {
  const navigate = useNavigate();

  const { messages, status } = useMessages();

  useEffect(() => {
    if (!LOGIN_FLAG && !accessTokenLocalstorage.get()) {
      navigate("/login");
    }
  }, [navigate, messages]);

  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-4 pt-4">
          {messages.map(({ message, isUser }, index: number) => (
            <Message key={index} isUser={isUser || false}>
              {message}
            </Message>
          ))}
          {status === STATUS.LOADING && (
            <Message isUser={false} isText={false}>
              <div className="flex gap-1 pt-2 pb-1 items-center">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
            </Message>
          )}
          {status === STATUS.ERROR && (
            <Alert>
              Something went wrong! <br /> Please try again
            </Alert>
          )}
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
  return <div id="bottom" ref={elementRef} />;
};

export default Home;
