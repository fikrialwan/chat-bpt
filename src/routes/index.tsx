import Layout from "../component/layout";
import Container from "../component/shared/container";
import profile from "../assets/chat-bpt-profile.jpg";

const Home = () => {
  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-4">
          <p className="px-6 py-3 rounded-3xl rounded-tr-none bg-primaryBlue text-white self-end">
            hi
          </p>
          <div className="flex flex-row items-end gap-4">
            <img
              src={profile}
              className="w-12 h-12 rounded-full border-2 outline-white"
            />
            <p className="px-6 py-3 rounded-3xl rounded-bl-none bg-primaryGray">
              hello
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
