interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto max-w-screen-2xl w-full px-4 ">{children}</div>
  );
};

export default Container;
