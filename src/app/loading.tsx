import Spacer from "@/components/common/Spacer";
import Title from "@/components/common/Title";

const Loading = () => {
  return (
    <>
      <section className="h-screen grid place-items-center">
        <div>
          <Title tag="h2" margin="none" size="xl" align="center">
            😵 LOADING... 😵
          </Title>
          <Spacer size="lg" />
          <div className="loading-wave">
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loading;
