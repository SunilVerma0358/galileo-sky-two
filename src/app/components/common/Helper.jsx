import {
  DiscordIcon,
  HeroDiscordIcon,
  HeroLinkdinIcon,
  HeroTelgramIcon,
  HeroTwitterIcon,
  LinkdinIcon,
  TelgramIcon,
  TwitterIcon,
} from "./Icon";

export const SocialIconArray = [
  { href: "https://www.linkedin.com", socialIcon: <LinkdinIcon /> },
  { href: "https://discord.com/", socialIcon: <DiscordIcon /> },
  { href: "https://telegram.org/", socialIcon: <TelgramIcon /> },
  { href: "https://x.com/?lang=en", socialIcon: <TwitterIcon /> },
];
export const HeroSocialIconArray = [
  { socialIcon: <HeroLinkdinIcon /> },
  { socialIcon: <HeroDiscordIcon /> },
  { socialIcon: <HeroTelgramIcon /> },
  { socialIcon: <HeroTwitterIcon /> },
];
export const LinkArray = [
  { hreflink: "#home", Link: "Home" },
  { Link: "Games" },
  { Link: "AI-Platform" },
  { Link: "Team" },
  { Link: "Careers" },
  { Link: "Privacy Policy" },
];
