import Navbar2 from "../components/navbar2";
import SignUpForm from "../components/signUpForm";
import Footer from "../components/footer";
import NewsletterSection from "../components/newsLetter";
import "../styles/signUp_&_signIn.css";
import Logo from '../../public/assets/images/logo-banner.png'

const SignUpPage = () => {
  return (
    <>
      <Navbar2 logo={Logo} />
      <main>
        <SignUpForm />
      </main>
      <Footer />
      <NewsletterSection />
    </>
  );
};

export default SignUpPage;
