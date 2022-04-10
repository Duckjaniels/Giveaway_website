import React from "react";
import { HomeHeader } from "./HomeHeader";
import { HomeContactFooter } from "./HomeContactFooter";
import { HomeWhoHelp } from "./HomeWhoHelp";
import { HomeEasySteps } from "./HomeEasySteps";
import { HomeAboutUs } from "./HomeAboutUs";
import { HomeThreeColumns } from "./HomeThreeColumns";

const Home = () => (
  <>
    <HomeHeader />
    <HomeThreeColumns />
    <HomeEasySteps />
    <HomeAboutUs />
    <HomeWhoHelp />
    <HomeContactFooter />
  </>
);
export { Home };
