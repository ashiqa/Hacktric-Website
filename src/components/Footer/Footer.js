import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
      <FooterLinkTitle>About Us</FooterLinkTitle>
        <FooterSubText>Founded in 2020 , CybOrg has started from Innovation Garage Incubator in Telengana , India . </FooterSubText>
        <FooterSubText>Ashiqa  & Manhi first started it out, with the passion to bridge the gap</FooterSubText>
        <FooterSubText> between need for cybersecurity and ground-reality in low hiring rates</FooterSubText>
        <FooterSubText>by introducing standardised and efficient assessment i.e. CTF .</FooterSubText>
        <FooterSubText>We are thrilled to be part of the security industry</FooterSubText>
        <FooterSubText> and hope to work with the larger aim of attracting students to cybersecurity. </FooterSubText>
      </FooterSubscription>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/'>holakitty041@gmail.com</FooterLink>
            <FooterLink to='/'>  Center for Innovation and Development, NITW, Warangal, Telangana 506004, India
</FooterLink>
          </FooterLinkItems>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            CYBORG
          </SocialLogo>
          <WebsiteRights>CYBORG © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
