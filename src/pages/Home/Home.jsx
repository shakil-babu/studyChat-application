import Common from "../../components/Common/Common";
import Header from "../../components/Header/Header";
import img from "../../utilities/images/chat.svg";
import img2 from "../../utilities/images/chat2.svg";
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <>
      <section className="home__main__area">
        <Header />
        <Common
          img={img2}
          heading={"Your friends come to your phone"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illo nesciunt sint quisquam ipsam ratione quo labore! Ut quaerat harum temporibus aspernatur corrupti. Maiores minus repellat laboriosam accusantium illo nulla!"}
          bg={false}
        />
        <Common
          img={img}
          bg={true}
          heading={"Where hanging out is easy"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illo nesciunt sint quisquam ipsam ratione quo labore! Ut quaerat harum temporibus aspernatur corrupti. Maiores minus repellat laboriosam accusantium illo nulla!"}
        />
      
      </section>

      <Footer/>
    </>
  );
};

export default Home;
