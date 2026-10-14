import { useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import { updateSeo } from "../lib/seo";
import { getPageSeo } from "../lib/seo-pages";
import { DEFAULT_DESCRIPTION } from "../lib/site";

function normalizePath(path: string) {
  return path.replace(/\/+$/, "") || "/";
}

export function SeoUpdater() {
  const { lang, L } = useLanguage();

  useEffect(() => {
    const path = normalizePath(window.location.pathname);
    const page = getPageSeo(path);

    if (page) {
      updateSeo({
        title: page[lang].title,
        description: page[lang].description,
        keywords: page[lang].keywords,
        path,
        lang,
        includeFaqSchema: path === "/",
      });
      return;
    }

    updateSeo({
      title: L.meta.title,
      description: L.meta.description ?? DEFAULT_DESCRIPTION,
      path,
      lang,
    });
  }, [lang, L.meta.title, L.meta.description]);

  return null;
}
