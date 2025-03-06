import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setLanguage } from "@/store/slices/app/languageSlice";

const Example3 = () => {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.app.language.language); // ✅ Get language from Redux
  const [translation, setTranslation] = useState({});

  // Load translations dynamically when language changes
  useEffect(() => {
    import(`./locales/${language}.json`)
      .then((data) => setTranslation(data))
      .catch((err) => console.error("Translation Load Error:", err));
  }, [language]);

  return (
    <>
      <h1>{translation.welcome || "Loading..."}</h1>
      <button>{translation.button_text || "Loading..."}</button>

      <div>
        <button onClick={() => dispatch(setLanguage("en"))}>English</button>
        <button onClick={() => dispatch(setLanguage("es"))}>Español</button>
      </div>
    </>
  );
};

export default Example3;
