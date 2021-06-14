import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
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
      
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/'>hacktric0@gmail.com </FooterLink>
            <a target="_blank"  style={{ color: '#FFF' }} href='https://goo.gl/maps/n27Pr9VXDZrhJhjQ8'>  Center for Innovation and Development, NITW, Warangal, Telangana 506004, India
</a>
          </FooterLinkItems>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            HACKTRIC
          </SocialLogo>
          <WebsiteRights>HACKTRIC © 2021</WebsiteRights>
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
