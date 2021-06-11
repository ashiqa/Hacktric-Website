import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
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
            <PricingCard >
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
                <a href='https://9vva7ymmlqw.typeform.com/to/IeSqeJDo' target='_blank'>
                <Button primary>BOOK CTF</Button>
                </a>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>2</PricingCardPlan>
                <PricingCardCost>Conferences</PricingCardCost>
                <PricingCardLength>Security & Technology</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature></PricingCardFeature>
                  
                  <PricingCardFeature>Organize CTFs with us </PricingCardFeature>
                  <PricingCardFeature>  to upgrade attendees'  </PricingCardFeature>
                  <PricingCardFeature>cybersecurity skills</PricingCardFeature>
                  <PricingCardFeature> to the next level</PricingCardFeature>
                </PricingCardFeatures>
                <a href='https://9vva7ymmlqw.typeform.com/to/IeSqeJDo' target='_blank'>
                <Button primary>BOOK CTF</Button>
                </a>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>3</PricingCardPlan>
                <PricingCardCost>Companies</PricingCardCost>
                <PricingCardLength>Technical & Non-technical</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>CTFs are an apt way to </PricingCardFeature>
                  <PricingCardFeature> scrutinize & hire security </PricingCardFeature>
                  <PricingCardFeature>professionals. Safeguard  </PricingCardFeature>
                  <PricingCardFeature>your business with us. </PricingCardFeature>
                </PricingCardFeatures>
                <a href='https://9vva7ymmlqw.typeform.com/to/IeSqeJDo' target='_blank'>
                <Button primary>BOOK CTF</Button>
                </a>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
