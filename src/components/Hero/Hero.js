import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  SectionTitleHead,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitleHead main center>
          <h4>Hi, my name is</h4>
        </SectionTitleHead>
        <SectionTitle main center>
          Sahil Mandre <br />
          I build things for <br /> the web.
        </SectionTitle>
        <SectionText>
          I'm a Bhopal-based software engineer who specializes in building (and
          occasionally designing) exceptional digital experiences.
        </SectionText>
        <Button onClick={props.handleClick}>Get In Touch</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
