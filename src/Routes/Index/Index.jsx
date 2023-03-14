import '../Index/Index.css'
import Navbar from "../../components/Navbar/Navbar"
import Banner from '../../components/Banner/Banner'
import ContentOne from '../../components/Content/ContentOne'
import ContentTwo from '../../components/Content/ContentTwo/ContentTwo'
import ContentThree from '../../components/Content/ContentThree'
import ContentFour from '../../components/Content/ContentFour/ContentFour'
import Footer from '../../components/Footer'



const Index = () => {
  return (
    <>
    <Navbar 
      linkColor={'white'}
    />
    <Banner />
    <ContentOne />
    <ContentTwo />
    <ContentThree />
    <ContentFour />
    <Footer />
    </>
  )
}

export default Index