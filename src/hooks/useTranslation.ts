import { ru } from "@/translations/ru";

type Translation = typeof ru;
type TranslationValue =
  | string
  | string[]
  | Record<string, unknown>
  | Array<Record<string, unknown>>;

export const useTranslation = () => {
  const t = (key: string): TranslationValue => {
    const keys = key.split(".");
    let result: Translation = ru;

    for (const k of keys) {
      if (result[k] === undefined) {
        console.warn(`Translation key "${key}" not found`);
        return key;
      }
      result = result[k] as Translation;
    }

    return result as TranslationValue;
  };

  return { t };
};

export default useTranslation;
