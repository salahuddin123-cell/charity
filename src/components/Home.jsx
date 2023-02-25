import React from "react";
import Layout1 from "./layout/Layout1";
import CallIcon from "@mui/icons-material/Call";
import WalletIcon from "@mui/icons-material/Wallet";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';

const dummynews = [
  {
    category: " Social Service",
    title:
      "August 2022 – Lifeline Collected and distributed 5000 dresses, 100 School bags and 700+ Toys",
    desc: "Like previous years, this year too from January, we started this initiative to bring priceless smiles on thousands of faces. From the last couple of months, it has been our desire to hand over new clothes, Bags and Toys among poor and underprivileged individuals from various areas of our city – Lingarajpuram, Bharathnagar, Kuppuswamy layout, Shivajinagar, Yelahanka, HBR Layout Slums, Hennur, Noornagar etc. The situation is quite horrifying and people jump over the truck loaded with clothes to get one not for them, but for their children. The endless effort of our staff, who continue to make this event a grand success story.",
    link: "",
    img: "/img/charity2.jpg",
  },
  {
    category: " Social Service",
    title:
      "August 2022 – Lifeline Collected and distributed 5000 dresses, 100 School bags and 700+ Toys",
    desc: "Like previous years, this year too from January, we started this initiative to bring priceless smiles on thousands of faces. From the last couple of months, it has been our desire to hand over new clothes, Bags and Toys among poor and underprivileged individuals from various areas of our city – Lingarajpuram, Bharathnagar, Kuppuswamy layout, Shivajinagar, Yelahanka, HBR Layout Slums, Hennur, Noornagar etc. The situation is quite horrifying and people jump over the truck loaded with clothes to get one not for them, but for their children. The endless effort of our staff, who continue to make this event a grand success story.",
    link: "",
    img: "/img/charity3.jpg",
  },
  {
    category: " Social Service",
    title:
      "August 2022 – Lifeline Collected and distributed 5000 dresses, 100 School bags and 700+ Toys",
    desc: "Like previous years, this year too from January, we started this initiative to bring priceless smiles on thousands of faces. From the last couple of months, it has been our desire to hand over new clothes, Bags and Toys among poor and underprivileged individuals from various areas of our city – Lingarajpuram, Bharathnagar, Kuppuswamy layout, Shivajinagar, Yelahanka, HBR Layout Slums, Hennur, Noornagar etc. The situation is quite horrifying and people jump over the truck loaded with clothes to get one not for them, but for their children. The endless effort of our staff, who continue to make this event a grand success story.",
    link: "",
    img: "/img/charity4.jpg",
  },
  {
    category: " Social Service",
    title:
      "August 2022 – Lifeline Collected and distributed 5000 dresses, 100 School bags and 700+ Toys",
    desc: "Like previous years, this year too from January, we started this initiative to bring priceless smiles on thousands of faces. From the last couple of months, it has been our desire to hand over new clothes, Bags and Toys among poor and underprivileged individuals from various areas of our city – Lingarajpuram, Bharathnagar, Kuppuswamy layout, Shivajinagar, Yelahanka, HBR Layout Slums, Hennur, Noornagar etc. The situation is quite horrifying and people jump over the truck loaded with clothes to get one not for them, but for their children. The endless effort of our staff, who continue to make this event a grand success story.",
    link: "",
    img: "/img/charity2.jpg",
  },
  {
    category: " Social Service",
    title:
      "August 2022 – Lifeline Collected and distributed 5000 dresses, 100 School bags and 700+ Toys",
    desc: "Like previous years, this year too from January, we started this initiative to bring priceless smiles on thousands of faces. From the last couple of months, it has been our desire to hand over new clothes, Bags and Toys among poor and underprivileged individuals from various areas of our city – Lingarajpuram, Bharathnagar, Kuppuswamy layout, Shivajinagar, Yelahanka, HBR Layout Slums, Hennur, Noornagar etc. The situation is quite horrifying and people jump over the truck loaded with clothes to get one not for them, but for their children. The endless effort of our staff, who continue to make this event a grand success story.",
    link: "",
    img: "/img/charity3.jpg",
  },
  {
    category: " Social Service",
    title:
      "August 2022 – Lifeline Collected and distributed 5000 dresses, 100 School bags and 700+ Toys",
    desc: "Like previous years, this year too from January, we started this initiative to bring priceless smiles on thousands of faces. From the last couple of months, it has been our desire to hand over new clothes, Bags and Toys among poor and underprivileged individuals from various areas of our city – Lingarajpuram, Bharathnagar, Kuppuswamy layout, Shivajinagar, Yelahanka, HBR Layout Slums, Hennur, Noornagar etc. The situation is quite horrifying and people jump over the truck loaded with clothes to get one not for them, but for their children. The endless effort of our staff, who continue to make this event a grand success story.",
    link: "",
    img: "/img/charity4.jpg",
  },
];
const Home = () => {
  return (
    <div style={{ width: "100%",overflow:"hidden" }}>
      <Layout1>
        <div >
          <div className="homepage">
            <h1>YOU CAN MAKE A CHANGE TO THE SOCIETY. VOLUNTEER NOW!</h1>
            <br />
            <div className="callandinvolve">
              {" "}
              <p className="call">
                <CallIcon className="callicon" /> Call :7407051753
              </p>
              <p className="involve">
                <WalletIcon className="involveicon" /> Get Involved
              </p>
            </div>
          </div>

          <div className="newssection">
            <h1 className="newshead">latest news</h1>

            <div className="news">
              {dummynews.map((e, i) => {
                return (
                  <div className="newsitem">
                    <img src={e.img} alt="no" />
                    <div className="newstext">
                      <p className="title">{e.title}</p>
                      <br />
                      <p className="category" style={{ color: "#2EA3F2" }}>
                        {e.category}
                      </p>
                      <p className="readmore">read more</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mission">
            <h1>Our Mission</h1>
            <p>
              To empower the poor by providing funds, resources, guidance and
              support in an ethical and compliant manner so that they may become
              financially strong.
            </p>
          </div>
          <div className="vission">
            <h1>Our Vission</h1>
            <p>
              Our vision for our charity organization is to create a world where
              everyone has access to basic needs such as food, clean water,
              shelter, and education. We envision a world where individuals and
              communities are empowered to build their own future, regardless of
              their socio-economic background or geographic location. Our
              charity will strive to provide sustainable solutions that address
              the root causes of poverty and inequality, and work towards
              creating a more just and equitable society. We aim to inspire and
              engage individuals and communities around the world to join us in
              our mission to create a brighter future for all.
            </p>
          </div>
          <div className="getintouch">
            
              <div className="logosection">
                <img src="/img/trustlogo.jpg" alt="" />
                <div className="social">
                <FacebookIcon style={{color:'blue',width:"50px", height:'80px'}} />
                <InstagramIcon style={{color:'purple',height:"80px",width:"50px"}} />
                <YouTubeIcon style={{color:'red',height:'80px',width:"50px"}} />
              </div>
             
        
            </div>

            <div className="address">
              <h1>Get In Touch</h1>
              <p className="head"><LocationOnIcon/> The life care trust</p>
              <p className="detail">Kamarbari road </p>
              <p className="detail">Newtown ,Kolkata 7000156</p>
              <p className="head"><PhoneAndroidIcon/> Phone</p>
              <p className="detail">7407051753(Salahuddin, Manager , The life are trust)</p>
              <p className="head"><EmailIcon/> Email</p>
              <p className="detail">Obaid@gmail.com</p>
            </div>
          </div>
         <div className="helpinghand">
            <h1>Let Us Lend a Helping Hand</h1>
            <div className="callbuttom">
             
              <p className="calls">
                <CallIcon className="callicon" /> Call :7407051753
              </p>
              <p className="involve">
                <WalletIcon className="involveicon" /> Get Involved
              </p>
            </div>
         </div>
         <div className="footer">
              <h3>Designed by -Salahuddin sk-2023</h3>
         </div>
        </div>
      </Layout1>
    </div>
  );
};

export default Home;
