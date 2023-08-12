import { Locale } from "@/i18n-config";
import { DictionaryType, getDictionary } from "../../../get-dictionary";
import HeroSection from "./home-sections/hero";
import ParagraphsSection from "./home-sections/paragraphs";

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary: DictionaryType = await getDictionary(lang);
  return (
    <main>
      <HeroSection />
      <ParagraphsSection dictionary={dictionary} lang={lang} />
    </main>
  );
};
export default Home;
