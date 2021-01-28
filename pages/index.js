import Layout from "../Components/layout";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  let { t } = useTranslation();
  return (
    <>
      <Layout>{t("common:greeting")}</Layout>
    </>
  );
}
