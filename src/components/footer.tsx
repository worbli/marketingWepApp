import React, { useContext } from 'react';
import { Context } from "../components/context";
import { Translations } from '../localization/dictionary';

const Footer: React.FC = () => {
  const { global } = useContext(Context) as {global: any};
  const txt = Translations[global.language];

  return (    
    <div>Insert Footer Here</div>
  );
}

export { Footer };