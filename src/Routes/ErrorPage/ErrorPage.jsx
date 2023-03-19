import "./ErrorPage.css";
import Footer from '../../components/Footer/Footer'
import Nav from "../../components/Nav/Nav";

export default function ErrorPage() {
  return (
    <>
    <Nav/>
      <div className="error-cont">
        <div className="error-page">
          <h1>Oops!</h1>
          <p>Sorry, the link you clicked may be broken or the page may have been removed.</p>
          <p>
            <a href="/"> &larr; Go back to the homepage</a>
          </p>
        </div>
        <img src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif" alt="error" />
      </div>
      <Footer />
    </>
    
  );
}