import Link from "next/link";
import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  background: salmon;
  color: white;
  padding: 20px;
  margin: 0;
`;
const Content = styled.h1`
  background: red;
  color: black;
  padding: 40px;
  margin: 0;
`;

const NavItems = styled.div`
  padding: 20px;
`;
const Footer = styled.div`
  background: skyBlue;
  color: black;
  padding: 20px;
  margin: 0;
`;

export default function About() {
  let router = useRouter();
  let { t } = useTranslation();

  return (
    <>
      <NavBar>
        <NavItems>
          <Link href="/">
            <a>Home</a>
          </Link>
        </NavItems>
        <NavItems>
          <Link href="/about">
            <a>About</a>
          </Link>
        </NavItems>
      </NavBar>
      <Content>{t("about:title")}</Content>
      <Footer>
        <ul>
          {router.locales.map(locale => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a> {locale}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Footer>
    </>
  );
}
