import React, { useState } from "react";
import Loadable from "@loadable/component";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";

import IntroContent2 from "../../content/IntroContent2.json";
import MiddleBlockContent2 from "../../content/MiddleBlockContent2.json";
import AboutContent2 from "../../content/AboutContent2.json";
import MissionContent2 from "../../content/MissionContent2.json";
import ProductContent2 from "../../content/ProductContent2.json";

import * as S from "../Footer/styles";

const ContactFrom = Loadable(() => import("../ContactForm"));
const ContentBlock = Loadable(() => import("../ContentBlock"));
const MiddleBlock = Loadable(() => import("../MiddleBlock"));
const Container = Loadable(() => import("../../common/Container"));
const ScrollToTop = Loadable(() => import("../../common/ScrollToTop"));

const Home = () => {
  const handleChange = (e) => {
    if (e.target.value == 1) {
      setMateria({
        introTitle: IntroContent.title,
        introText: IntroContent.text,
        middleTitle: MiddleBlockContent.title,
        middleText: MiddleBlockContent.text,
        aboutTitle: AboutContent.title,
        aboutText: AboutContent.text,
        aboutSection: AboutContent.section,
        missionTitle: MissionContent.title,
        missionText: MissionContent.text,
        productTitle: ProductContent.title,
        productText: ProductContent.text,
      });
    } else {
      setMateria({
        introTitle: IntroContent2.title,
        introText: IntroContent2.text,
        middleTitle: MiddleBlockContent2.title,
        middleText: MiddleBlockContent2.text,
        aboutTitle: AboutContent2.title,
        aboutText: AboutContent2.text,
        aboutSection: AboutContent2.section,
        missionTitle: MissionContent2.title,
        missionText: MissionContent2.text,
        productTitle: ProductContent2.title,
        productText: ProductContent2.text,
      });
    }
  };

  const [materia, setMateria] = useState({
    introTitle: IntroContent.title,
    introText: IntroContent.text,
    middleTitle: MiddleBlockContent.title,
    middleText: MiddleBlockContent.text,
    aboutTitle: AboutContent.title,
    aboutText: AboutContent.text,
    aboutSection: AboutContent.section,
    missionTitle: MissionContent.title,
    missionText: MissionContent.text,
    productTitle: ProductContent.title,
    productText: ProductContent.text,
  });

  return (
    <>
      <S.Select>
        <S.Label htmlFor="select-lang">{"Aprender sobre"}</S.Label>
        <S.LangSelect onChange={handleChange} id="select-lang">
          <option value="1">1 Teoria Geral dos Sistemas</option>
          <option value="2">2 Sistemas de Informação</option>
        </S.LangSelect>
      </S.Select>
      <Container>
        <ScrollToTop />
        <ContentBlock
          type="right"
          first="true"
          title={materia.introTitle}
          content={materia.introText}
          button={IntroContent.button}
          icon="developer.svg"
          id="intro"
        />
        <MiddleBlock
          title={materia.middleTitle}
          content={materia.middleText}
          button={MiddleBlockContent.button}
        />
        <ContentBlock
          type="left"
          title={materia.aboutTitle}
          content={materia.aboutText}
          section={materia.aboutSection}
          icon="graphs.svg"
          id="about"
        />
        <ContentBlock
          type="right"
          title={materia.missionTitle}
          content={materia.missionText}
          icon="product-launch.svg"
          id="mission"
        />

        <ContentBlock
          type="left"
          title={materia.productTitle}
          content={materia.productText}
          icon="waving.svg"
          id="product"
        />
      </Container>

      <S.Select>
        <S.Label htmlFor="select-lang">{"Aprender sobre"}</S.Label>
        <S.LangSelect onChange={handleChange} id="select-lang">
          <option value="1">1 Teoria Geral dos Sistemas</option>
          <option value="2">2 Sistemas de Informação</option>
        </S.LangSelect>
      </S.Select>
    </>
  );
};

export default Home;
