import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/gi';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon> 
                <PricingCardPlan>1</PricingCardPlan>
                <PricingCardCost>Universities</PricingCardCost>
                <PricingCardLength>Hackathons & Tech Fests</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Discover hidden talents</PricingCardFeature>
                  <PricingCardFeature>existing in your campus</PricingCardFeature>
                  <PricingCardFeature>by conducting CTFs</PricingCardFeature>
                  <PricingCardFeature>with us</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>BOOK CTF</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>2</PricingCardPlan>
                <PricingCardCost>Conferences</PricingCardCost>
                <PricingCardLength>Security & Technology</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature></PricingCardFeature>
                  
                  <PricingCardFeature>Organize CTFs </PricingCardFeature>
                  <PricingCardFeature> with us to upgrade </PricingCardFeature>
                  <PricingCardFeature>attendees' cybersecurity skills</PricingCardFeature>
                  <PricingCardFeature> to the next level</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>BOOK CTF</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>3</PricingCardPlan>
                <PricingCardCost>Companies</PricingCardCost>
                <PricingCardLength>Technical & Non-technical</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>CTFs are ampt way to scrutinize </PricingCardFeature>
                  <PricingCardFeature> & hire security professionals.</PricingCardFeature>
                  <PricingCardFeature>Safeguard your business</PricingCardFeature>
                  <PricingCardFeature>with us </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>BOOK CTF</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
