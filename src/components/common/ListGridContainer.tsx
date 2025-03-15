import { ChildrenProps } from "@/types/shared/common.types";

const ListGridContainer = ({ children }: ChildrenProps) => {
  return (
    <section className="bg-white grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 m-5 md:m-10 lg:m-14">
      {children}
    </section>
  );
};

export default ListGridContainer;
