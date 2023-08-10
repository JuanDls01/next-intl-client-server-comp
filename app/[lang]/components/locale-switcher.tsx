"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "../../../i18n-config";

const LocaleSwitcher = () => {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className='flex items-center'>
      <p>Locale switcher:</p>
      <ul className='flex items-center gap-1.5'>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default LocaleSwitcher;
