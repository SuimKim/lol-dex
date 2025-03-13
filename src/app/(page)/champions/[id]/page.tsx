import Image from "next/image";
import { DetailChampion, Spell } from "@/types/shared/api/champion.types";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";

type Params = {
  id: string;
};

const DetailPage = async ({ params }: { params: Params }) => {
  const id: string = params.id;
  const imgPath: string = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`;

  const versionRes: Response = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const version: string[] = await versionRes.json();
  const res: Response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version[0]}/data/ko_KR/champion/${id}.json`,
    {
      cache: "no-store",
    }
  );
  const { data }: DetailChampion = await res.json();
  const champion = data[id];
  return (
    <>
      <Title tag="h1" size="4xl" margin="md" align="left">
        {champion.name}
      </Title>
      <Title tag="h2" size="2xl" margin="md" align="left">
        {champion.title}
      </Title>
      <Image src={imgPath} alt="챔피언 이미지" width={1000} height={600} />
      <Title tag="h3" size="2xl" align="left" margin="sm">
        소개
      </Title>
      <Text size="md" align="left">
        {champion.lore}
      </Text>
      <hr />
      <Title tag="h3" size="2xl" align="left" margin="sm">
        동맹 팁
      </Title>
      {champion.allytips.map((tip, index) => (
        <Text key={index} size="md" align="left">
          {tip}
        </Text>
      ))}
      <hr />
      <Title tag="h3" size="2xl" align="left" margin="sm">
        공격 팁
      </Title>
      {champion.enemytips.map((tip, index) => (
        <Text key={index} size="md" align="left">
          {tip}
        </Text>
      ))}
      <hr />
      <Title tag="h3" size="2xl" align="left" margin="sm">
        {champion.name}의 스킬
      </Title>
      <div className="grid grid-cols-3 gap-5">
        {champion.spells.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </>
  );
};

export default DetailPage;

const SkillCard = ({ skill }: { skill: Spell }) => {
  const imgPath: string = `https://ddragon.leagueoflegends.com/cdn/14.5.1/img/spell/${skill.image.full}`;

  return (
    <>
      <div className="border-2">
        <Title tag="h4" size="xl" margin="none" align="left">
          {skill.name}
        </Title>
        <Image src={imgPath} alt="스킬 이미지" width={100} height={100} />
        <Text size="sm" align="left">
          {skill.description}
        </Text>
      </div>
    </>
  );
};
