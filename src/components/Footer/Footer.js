import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
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
      </FooterSubscription>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/'>rahmanashiqa@gmail.com manhipanwar01@gmail.com </FooterLink>
            <a target="_blank"  style={{ color: '#FFF' }} href='https://goo.gl/maps/n27Pr9VXDZrhJhjQ8'>  Center for Innovation and Development, NITW, Warangal, Telangana 506004, India
</a>
          </FooterLinkItems>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            CYBORG
          </SocialLogo>
          <WebsiteRights>CYBORG © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='//www.facebook.com/CybSecNITW/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='//www.instagram.com/manhi_panwar/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='//www.linkedin.com/in/ashiqa-rahman-432a47192/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
