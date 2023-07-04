import {
  faFacebookF,
  faLinkedin,
  faWhatsapp,
  faTelegram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  AboutContainer,
  Description,
  Facebook,
  Image,
  Info,
  Li,
  LinkedIn,
  PreviousProject,
  Skill,
  Social,
  Telegram,
  WhatsApp,
  GitHub,
} from "./about.styles";
import { Fragment } from "react";
const skills = [
  "react",
  "redux",
  "react-redux",
  "reselect",
  "redux-saga",
  "redux-logger",
  "redux-persist",
  "styled-components",
  "react-router-dom",
  "fontAwesomeIcon",
];
const projects = [
  { name: "Shop", Url: "https://superlative-chebakia-1f1043.netlify.app/" },
  ,
  { name: "Memory-Game", Url: "https://saif-mohammed1.github.io/Memory-Game/" },
  ,
  { name: "To-DO-List", Url: "https://saif-mohammed1.github.io/To-DO-List/" },
  ,
  {
    name: "Weather-App",
    Url: "https://fastidious-cupcake-4ef5a8.netlify.app/",
  },
  ,
  {
    name: "HTML_CSS_Template_One",
    Url: "https://saif-mohammed1.github.io/HTML_CSS_Template_One/",
  },
  {
    name: "HTML_CSS_Template_Two",
    Url: "https://saif-mohammed1.github.io/Template-Two/#",
  },
  {
    name: "HTML_CSS_Template_Three",
    Url: "https://saif-mohammed1.github.io/HTML_And_CSS_Template_Three/",
  },
];
const About = () => {
  return (
    <AboutContainer>
      <Info>
        <Image
          src="https://github.com/Saif-Mohammed1/eShop/blob/master/src/assets/saif.png?raw=true"
          alt="Saif Mohammed"
        />
        <p>
          Hello everyone. My name is <span>Saif Mohammed</span> I'm FrontEnd
          developer
        </p>
        <p>Location : Egypt</p>
        <Social>
          <li>
            <a
              href="https://github.com/Saif-Mohammed1"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/saif.mohammed0"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/saif-mohammed-2a4ab31a6/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/@Saif_M0hammed"
              target="_blank"
              rel="noreferrer"
            >
              <Telegram icon={faTelegram} />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+201024599132"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsApp icon={faWhatsapp} />
            </a>
          </li>
        </Social>
      </Info>
      <Description>
        <h1> Project Description</h1>
        <p>
          in this project, there are pages that users have access to see and
          there are pages only Admin has access to see like storing data you can
          use this email to try these features
          <strong> test.123@gmail.com </strong> and password is
          <strong> 12345678 </strong>
          then after signing in some buttons will be visible to you for example
          you will see in nave bar this <strong> + </strong> after click on it u
          will move to addItems page which allows you to add the item to your
          store you will find there <strong> select </strong> its not doing
          anything shows you which section you have in the database to add the
          item you need to enter the 5 form field
          <strong> first field is the title </strong> if the title you put is
          exist in the database it will push the item you add under that title
          if it not exist it will create a new seaction under that title first
          is
          <br />
          <strong> second field is the Name of that product </strong>
          <br />
          <strong> third field is the ImageUrl of that product </strong>
          <br />
          <strong> fourth field is the price of that product </strong>
          <br />
          <strong> fifth field is the Rating of that product </strong>
          <br />
          and there is a select option call
          <strong> Home Page </strong> if you select it it will replace input
          field to three form fields there are responsible for the main page
          section you can add which section you have the to main page
          <strong> first field is the title of that section </strong>
          <br />
          <strong>second field is the background image of that section </strong>
          <br />
          <strong> and the last field is the route of that section </strong> for
          example "/shop/hats..."
        </p>
      </Description>
      <Skill>
        <h1>Skills I used in my project</h1>
        <ul>
          {skills.map((skill, index) => (
            <Fragment key={index}>
              <Li>{skill}</Li>
            </Fragment>
          ))}
        </ul>
      </Skill>
      <PreviousProject>
        <h1>My previous projects</h1>
        <ul>
          {projects.map(({ name, Url }, index) => (
            <Fragment key={index}>
              <Li>
                <a href={Url} target="_blank" rel="noreferrer">
                  {name}
                </a>
              </Li>
            </Fragment>
          ))}
        </ul>
      </PreviousProject>
    </AboutContainer>
  );
};
export default About;
