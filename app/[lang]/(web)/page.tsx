import { Locale } from "@/i18n-config";
import dynamic from "next/dynamic";
import { DictionaryType, getDictionary } from "../../../get-dictionary";
import HeroSection from "./home-sections/hero";
import ParagraphsSection from "./home-sections/paragraphs-section";

// Server Component:
const LazyHeroSection = dynamic(() => import("./home-sections/hero"), {
  loading: () => <p>Loading...</p>,
});
const LazyParagraphsSection = dynamic(
  () => import("./home-sections/paragraphs-section"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary: DictionaryType = await getDictionary(lang);
  return (
    <main>
      {/* <LazyHeroSection />
      <LazyParagraphsSection dictionary={dictionary} lang={lang} /> */}
      <HeroSection />
      <ParagraphsSection dictionary={dictionary} lang={lang} />
    </main>
  );
};
export default Home;
