import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export default function FooterComponent() {
  return (
    <Footer
      container
      className="bg-secondary-200 dark:bg-secondary-600 text-center dark:text-white"
    >
      <FooterLinkGroup className="flex justify-center">
        <FooterLink href="https://coltmandev.dev/#about">About Me</FooterLink>
        <FooterLink href="https://github.com/juanvs23">Github</FooterLink>
        <FooterLink href="https://twitter.com/juanvs23">Twitter</FooterLink>
        <FooterLink href="https://www.linkedin.com/in/juanvs23/">
          LinkedIn
        </FooterLink>
      </FooterLinkGroup>
      <FooterCopyright
        href="https://coltmandev.dev/#contact"
        by="Juan Carlos Avila™"
        year={new Date().getFullYear()}
      />
    </Footer>
  );
}
