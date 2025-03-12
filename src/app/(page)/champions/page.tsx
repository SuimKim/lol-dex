import ListCard from "@/components/common/ListCard";
import Title from "@/components/common/Title";

const ChampionPage = () => {
  return (
    <>
      <Title tag="h1" size="3xl" margin="md" align="center">
        챔피언 목록
      </Title>
      <ListGridContainer>
        <ListCard />
      </ListGridContainer>
    </>
  );
};

export default ChampionPage;

const ListGridContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-11/12 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 p-5 border-2">
      {children}
    </section>
  );
};
