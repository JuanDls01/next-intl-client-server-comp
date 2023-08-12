import { DictionaryType } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import dynamic from "next/dynamic";
import ParagraphB from "../../components/paragraphs/B";
import ParagraphC from "../../components/paragraphs/C";

// Server Component:
const LazyParagraphA = dynamic(() => import("../../components/paragraphs/A"), {
  loading: () => <p>Loading...</p>,
});

const ParagraphsSection = ({
  dictionary,
  lang,
}: {
  dictionary: DictionaryType;
  lang: Locale;
}) => {
  return (
    <div className="container flex flex-col gap-5">
      <h1 className="text-bold text-4xl">Current locale: {lang}</h1>
      <p>
        This text is rendered on the server:{" "}
        {dictionary["server-component"].welcome}
      </p>
      <p>
        {`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.`}
      </p>
      <LazyParagraphA />
      <ParagraphB />
      <ParagraphC />
    </div>
  );
};
export default ParagraphsSection;
