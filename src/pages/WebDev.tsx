import React from 'react'
import Cards from "../components/MiddleSection/Cards.js"
const WebDev = () => {
  return (
    <>
      <Cards
      title="My Portfolio"
      heading="An intuitive and responsive Portfolio Website using Nextjs Framework."
      content="Introducing my portfolio built on the Next.js framework. It is a stunning and intuitive website that showcases my skills and expertise in a visually appealing and user-friendly manner. With its responsive design and smooth navigation, my portfolio provides a seamless experience for users across all devices.Using Next.js, I have taken advantage of the powerful framework to create a sleek and modern design.
      Overall, this portfolio is a standout example of my skills and creativity as a web developer . 
      "
      tech="Next.Js, React, Javascript ES6, Framer Motion, HTML and CSS with Tailwind"
      link="https://github.com/TheLostSun"
      trailer=""
      techOrAvail="Techologies Used"
      trailerTitle=""
      image="/images/gameImages/Portfolio.png"
      buttonTitle="My Portfolio"></Cards>
      
      <Cards
      title="Education Adda"
      heading="A complete functioning MERN Stack E-Learning Website."
      content="Education Adda is a one stop shop for learner's dreaming of acquiring new skills via online learning. The platform provides users with access to a variety of courses, lectures, quizzes, and assignments, all of which are designed to engage and educate learners. Through the use of React, the platform's front-end is highly responsive and user-friendly, while MongoDB ,Express and Node.js provide a scalable and efficient backend. . 
      "
      tech="React, Javascript ES6, MongoDB, Express, Nodejs, HTML and CSS with Bootstrap"
      techOrAvail="Techologies Used"
      link="https://github.com/TheLostSun/E-Learning"
      trailer=""
      trailerTitle=""
      image="/images/gameImages/Website2.png"
      buttonTitle="Education Adda"></Cards>
      <Cards
      title="Shoppers Hub"
      heading="A complete functioning Full Stack E-Commerce Website ."
      content="Shoppers Hub comes integrated with all the functionalities necessary and required in a large scale E-Commerce shop. Users can login in as customers and buy items or login as sellers to list their items to be sold. Session Management, Cart System, Database connectivity and integration, Encryption of data and templating are some of the many features available in this project."
      tech="MongoDB, Javascript ES6, EJS, Express, HTML, CSS with Bootstrap and Nodejs"
      techOrAvail="Techologies Used"
      link="https://github.com/TheLostSun/eCommProject"
      trailerTitle=""
      trailer=""
      image="/images/gameImages/Website.png"
      buttonTitle="Shopper's Hub"></Cards>
      
      
    </>
  )
}

export default WebDev