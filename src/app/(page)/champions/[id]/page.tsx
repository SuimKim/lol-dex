import Image from "next/image";
import type { ChampionDetail, Spell } from "@/types/shared/riot.api.types";
import type { Params } from "@/types/pages/Champion.types";
import { getChampionDetail } from "@/utils/server.api";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import { CHAMPION_DETAIL_IMG_PATH, SPELL_IMG_PATH } from "@/constants";

const DetailPage = async ({ params }: { params: Params }) => {
  const id: string = params.id;
  const championData = await getChampionDetail(id);
  const champion: ChampionDetail[] = Object.values(championData);
  const { name, title, lore, allytips, enemytips, spells } = champion[0];
  return (
    <>
      <Title tag="h1" size="4xl" margin="md" align="left">
        {name}
      </Title>
      <Title tag="h2" size="2xl" margin="md" align="left">
        {title}
      </Title>
      <Image
        src={`${CHAMPION_DETAIL_IMG_PATH}/${id}_0.jpg`}
        alt="챔피언 이미지"
        width={1000}
        height={600}
      />
      <Title tag="h3" size="2xl" align="left" margin="sm">
        소개
      </Title>
      <Text size="md" align="left">
        {lore}
      </Text>
      <hr />
      <Title tag="h3" size="2xl" align="left" margin="sm">
        동맹 팁
      </Title>
      {allytips.map((tip, index) => (
        <Text key={index} size="md" align="left">
          {tip}
        </Text>
      ))}
      <hr />
      <Title tag="h3" size="2xl" align="left" margin="sm">
        공격 팁
      </Title>
      {enemytips.map((tip, index) => (
        <Text key={index} size="md" align="left">
          {tip}
        </Text>
      ))}
      <hr />
      <Title tag="h3" size="2xl" align="left" margin="sm">
        {name}의 스킬
      </Title>
      <div className="grid grid-cols-3 gap-5">
        {spells.map((spell) => (
          <SkillCard key={spell.id} spell={spell} />
        ))}
      </div>
    </>
  );
};

export default DetailPage;

const SkillCard = ({ spell }: { spell: Spell }) => {
  return (
    <>
      <div className="border-2">
        <Title tag="h4" size="xl" margin="none" align="left">
          {spell.name}
        </Title>
        <Image
          src={`${SPELL_IMG_PATH}/${spell.image.full}`}
          alt="스킬 이미지"
          width={100}
          height={100}
        />
        <Text size="sm" align="left">
          {spell.description}
        </Text>
      </div>
    </>
  );
};
