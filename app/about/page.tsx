import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Wa from "@/components/Wa";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KAL connect | About Page",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Wa />
      {/*<Breadcrumb
        pageName="About Page"
        description=""
      />*/}
      <AboutSectionOne />
      {/*<AboutSectionTwo />*/}
    </>
  );
};

export default AboutPage;
