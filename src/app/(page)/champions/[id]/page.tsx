import Image from "next/image";
import type { ChampionDetail, Spell } from "@/types/shared/riot.api.types";
import type {
  Params,
  SkillSectionProps,
  TipData,
  TipSectionProps,
  TitleContainerProps,
} from "@/types/pages/Champion.types";
import type { ChildrenProps } from "@/types/shared/common.types";
import { getChampionDetail } from "@/utils/server.api";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import Spacer from "@/components/common/Spacer";
import { CHAMPION_DETAIL_IMG_PATH, SPELL_IMG_PATH } from "@/constants";

const DetailPage = async ({ params }: { params: Params }) => {
  const id: string = params.id;
  const championData = await getChampionDetail(id);
  const champion: ChampionDetail[] = Object.values(championData);
  const { name, title, lore, allytips, enemytips, spells } = champion[0];

  const tipData: TipData[] = [
    { title: "동맹팁", contents: allytips.map((tip) => tip) },
    { title: "공격팁", contents: enemytips.map((tip) => tip) },
  ];

  return (
    <DetailContainer>
      <Image
        src={`${CHAMPION_DETAIL_IMG_PATH}/${id}_0.jpg`}
        alt="챔피언 이미지"
        width={1080}
        height={637}
        priority
      />
      <ContentsContainer>
        <TitleSection title={title} name={name} lore={lore} />
        {tipData.map((list, index) => (
          <TipSection list={list} key={index} />
        ))}
        <SkillSection name={name} spells={spells} />
      </ContentsContainer>
      <Spacer size="sm" />
    </DetailContainer>
  );
};

export default DetailPage;

const DetailContainer = ({ children }: ChildrenProps) => {
  return (
    <div className="max-w-[1080px] mx-auto justify-items-center lg:pb-5">
      {children}
    </div>
  );
};

const ContentsContainer = ({ children }: ChildrenProps) => {
  return (
    <div className="m-5 md:my-5 lg:m-0 p-3 md:p-5 lg:p-7 bg-white">
      {children}
    </div>
  );
};

const TitleSection = ({ title, name, lore }: TitleContainerProps) => {
  return (
    <section className="mb-5 flex flex-col gap-1">
      <Title tag="h2" size="sm" margin="none" align="left">
        {title}
      </Title>
      <Title tag="h1" size="xl" margin="none" align="left">
        {name}
      </Title>
      <Text size="sm" align="left" oneLine={false}>
        {lore}
      </Text>
    </section>
  );
};

const TipSection = ({ list }: TipSectionProps) => {
  return (
    <>
      <section>
        <Title tag="h3" size="sm" align="left" margin="none">
          {list.title}
        </Title>
        {list.contents.map((tip, index) => (
          <>
            <Text size="sm" align="left" oneLine={false}>
              {`${index + 1}. `}
              {tip}
            </Text>
          </>
        ))}
      </section>
      <Spacer size="sm" />
    </>
  );
};

const SkillSection = ({ name, spells }: SkillSectionProps) => {
  return (
    <>
      <Title tag="h3" size="sm" align="left" margin="none">
        {name}의 스킬
      </Title>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
        {spells.map((spell) => (
          <SkillCard key={spell.id} spell={spell} />
        ))}
      </div>
    </>
  );
};

const SkillCard = ({ spell }: { spell: Spell }) => {
  return (
    <>
      <div className="border-2 p-3 flex gap-3">
        <Image
          src={`${SPELL_IMG_PATH}/${spell.image.full}`}
          alt="스킬 이미지"
          width={100}
          height={100}
          className="h-24"
        />
        <div className="items-end">
          <Title tag="h4" size="xs" margin="none" align="left">
            {spell.name}
          </Title>
          <Text size="sm" align="left" oneLine={false}>
            {spell.description}
          </Text>
        </div>
      </div>
    </>
  );
};
