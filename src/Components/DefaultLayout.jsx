import Header from "../Sections/Header";
import Footer from "../Sections/Footer";

const DefaultLayout = ({ children }) => {
    return (
      <div>
        <Header />
        <div className="max-w-[1440px] mx-auto">
          {children}
        </div>
        <Footer />
      </div>
    );
  };

  export default DefaultLayout