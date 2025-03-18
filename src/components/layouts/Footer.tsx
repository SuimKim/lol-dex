import Text from "../common/Text";

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-black text-white p-4 w-full">
      <Text size="xs" align="center" oneLine={false}>
        LoL Dex is not endorsed by Riot Games and does not reflect the views or
        opinions of Riot Games or anyone officially involved in producing or
        managing Riot Games properties. <br />
        Riot Games and all associated properties are trademarks or registered
        trademarks of Riot Games, Inc.
      </Text>
    </footer>
  );
};

export default Footer;
