import { Locale } from "@/i18n-config";
import { DictionaryType, getDictionary } from "../../../get-dictionary";
import LocaleSwitcher from "../components/locale-switcher";
import HeroSection from "./home-sections/hero";
import ParagraphsSection from "./home-sections/paragraphs";

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary: DictionaryType = await getDictionary(lang);
  return (
    <div className='px-10 '>
      <HeroSection />
      <ParagraphsSection dictionary={dictionary} lang={lang} />
    </div>
  );
};
export default Home;
