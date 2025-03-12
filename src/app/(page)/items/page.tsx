import Title from "@/components/common/Title";
import ItemCard from "@/components/features/items/ItemCard";

const page = () => {
  return (
    <>
      <Title tag="h1" size="3xl" margin="md" align="center">
        아이템 목록
      </Title>
      <ListGridContainer>
        <ItemCard />
      </ListGridContainer>
    </>
  );
};

export default page;

const ListGridContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-11/12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 p-5 border-2">
      {children}
    </section>
  );
};
