
import './App.css';
import Body from './components/Body';
import BrandingDropDown from './components/BrandingDropDown';
import CaseStudyDropDown from './components/CaseStudyDropDown';
import SingleItemDropDown from './components/DropDown';
import FooterSection from './components/FooterSection';
import Header from './components/Header';
import IndustriesDropDown from './components/IndustriesDropDown';
import ServicesDropDown from './components/ServicesDropDown';
import Video from './components/Video';

function App() {
  return (
    <>
    <Header>
    { <ServicesDropDown/> }
    { <CaseStudyDropDown/> }
    { <IndustriesDropDown/> }
    { <BrandingDropDown/> }
    </Header>
    <Body/>
    <FooterSection/>
  
    </>
  );
}

export default App;
