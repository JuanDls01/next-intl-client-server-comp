import { Locale } from "@/i18n-config";
import { getDictionary } from "../../../get-dictionary";
import LocaleSwitcher from "../components/locale-switcher";

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <LocaleSwitcher />
      <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server:{" "}
        {dictionary["server-component"].welcome}
      </p>
      {/* <Counter dictionary={dictionary.counter} /> */}
    </div>
  );
};
export default Home;
