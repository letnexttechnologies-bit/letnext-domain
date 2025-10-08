import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Chatbot from "./component/Chatbot";
import Portfolio from "./component/Portfolio";
import Footer from "./component/Footer";
import WebDesigner from "./component/WebDesigner"
import AppDeveloper from "./component/AppDeveloper"
import GraphicDesigner from "./component/GraphicDesigner"
import UiUxDesigner from "./component/UiUxDesigner"
import Testing from "./component/Testing"
import DigitalMarketer from "./component/DigitalMarketer"
import SEOSpecialist from "./component/SEOSpecialist"
import Photographer from "./component/Photographer"
import Videographer from "./component/Videographer"
import ContentCreator from "./component/ContentCreator"
import Iot from "./component/Iot"
import Embbeded from "./component/Embbeded"
import Privacy from "./component/Privacy"
import Terms from "./component/Terms"
import Whatapp from "./component/Whatapp"
import TeamSection from "./component/TeamSection"


import Fullstack from "./component/Fullstack";
import Seo from "./component/seo";
import Datascientist from "./component/Datascientist";
import Cloudengineer from "./component/Cloudengineer";
import Mlengineer from "./component/Mlengineer";
import Uiux from "./component/Uiux";
import Mobile from "./component/Mobile";
import Network from "./component/Network";
import Embedded from "./component/Embedded";
import Blockchain from "./component/Blockchain";
import Excel from "./component/Excel";


function App() {
  return (
    <Router>
      <Routes>
        {/* Default route (first page) */}
        <Route path="/" element={<Home />} />

        {/* Other routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/webDesigner/web-development-company-in-erode" element={<WebDesigner />} />
        <Route path="/appDeveloper/app-development-company-in-erode" element={<AppDeveloper />} />
        <Route path="/graphicDesigner/graphic-design-company-in-erode" element={<GraphicDesigner />} />
        <Route path="/uiUxDesigner/uiux-design-company-in-erode" element={<UiUxDesigner />} />
        <Route path="/testing/testing-company-in-erode" element={<Testing />} />
        <Route path="/digitalMarketer/digital-marketing-company-in-erode" element={<DigitalMarketer />} />
        <Route path="/sEOSpecialist/seo-specialist-company-in-erode" element={<SEOSpecialist />} />
        <Route path="/photographer/photograph-company-in-erode" element={<Photographer />} />
        <Route path="/videographer/videograph-company-in-erode" element={<Videographer />} />
        <Route path="/contentCreator/context-creator-company-in-erode" element={<ContentCreator />} />
        <Route path="/iot/iot-company-in-erode" element={<Iot />} />
        <Route path="/embbeded/embbeded-company-in-erode" element={<Embbeded />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/whatapp" element={<Whatapp />} />
        <Route path="/teamSection" element={<TeamSection />} />


        {/* ///////////////////////////////// */}


        <Route path="/fullstack/full-stack-company-in-erode" element={<Fullstack />} />
        <Route path="/seo/seo-company-in-erode" element={<Seo />} />
        <Route path="/datascientist/data-scientist-company-in-erode" element={<Datascientist />} />
        <Route path="/cloudengineer/cloud-engineer-company-in-erode" element={<Cloudengineer />} />
        <Route path="/mlengineer/ml-engineer-company-in-erode" element={<Mlengineer />} />
        <Route path="/uiux/uiux-design-company-in-erode" element={<Uiux />} />
        <Route path="/mobile/mobile-development-company-in-erode" element={<Mobile />} />
        <Route path="/network/network-company-in-erode" element={<Network />} />
        <Route path="/embedded/embedded-company-in-erode" element={<Embedded />} />
        <Route path="/blockchain/blockchain-company-in-erode" element={<Blockchain />} />
        <Route path="/excel/excel-company-in-erode" element={<Excel />} />


      </Routes>
    </Router>
  );
}

export default App;
