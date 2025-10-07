import Navbar2 from "../components/navbar2";
import SignInForm from "../components/signInForm";
import Footer from "../components/footer";
import NewsletterSection from "../components/newsLetter";
import "../styles/signUp_&_signIn.css";
import Logo from "../../public/assets/images/logo-banner.png";

const SignInPage = () => {
  return (
    <>
      <Navbar2 logo={Logo} />
      <main>
        <SignInForm />
      </main>
      <Footer />
      <NewsletterSection />
    </>
  );
};

export default SignInPage;
