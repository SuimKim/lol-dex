import type { ChildrenProps } from "@/types/shared/common.types";
import Spacer from "@/components/common/Spacer";
import Title from "@/components/common/Title";
import Text from "@/components/common/Text";

const Error = ({
  errorMessage,
  children,
}: ChildrenProps & {
  errorMessage: string;
}) => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="text-center">
        <Title tag="h1" margin="none" size="extra" align="center">
          OOPS!
        </Title>
        <Spacer size="sm" />
        <Title tag="h2" margin="none" size="xl" align="center">
          😵 THAT&apos;S AN ERROR 😵
        </Title>
        <Spacer size="sm" />
        <Text size="lg" align="center" oneLine={false}>
          {errorMessage}
        </Text>
        <Spacer size="lg" />
        <div className="flex items-center justify-center gap-10">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Error;
