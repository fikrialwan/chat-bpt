import Layout from "../component/layout";
import Container from "../component/shared/container";
import Message from "../component/shared/message";

const Home = () => {
  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-4">
          <Message isUser>hi bang pitung</Message>
          <Message isUser={false}>hello, any questions ?</Message>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
