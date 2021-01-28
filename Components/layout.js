import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  background: salmon;
  color: white;
  padding: 20px;
  margin: 0;
`;

const NavItems = styled.div`
  padding: 20px;
`;

const Content = styled.h1`
  background: seaGreen;
  color: black;
  padding: 40px;
  margin: 0;
`;
const Footer = styled.div`
  background: skyBlue;
  color: black;
  padding: 20px;
  margin: 0;
`;

const Layout = ({ children }) => {
  let router = useRouter();
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
      <Content>{children}</Content>
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
};

export default Layout;
