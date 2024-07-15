import React from 'react';

interface FooterProps {
  // text to be displayed at the center of the footer
  centerText: string;
}

const Footer: React.FC<FooterProps> = ({centerText}) => {
  return (
    <footer className = "footer">
        <span className = 'footer__text'>
        {centerText}
        </span>


    </footer>
  );
};

export default Footer;