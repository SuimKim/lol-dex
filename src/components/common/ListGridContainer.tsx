import { ChildrenProps } from "@/types/shared/common.types";

const ListGridContainer = ({ children }: ChildrenProps) => {
  return (
    <section className="w-11/12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 p-5 border-2">
      {children}
    </section>
  );
};

export default ListGridContainer;
