// eslint-disable-next-line
let resumeData = {
  name: "Anshul Khatri",
  description:
    "I'm an aspiring Computer Science student and an aspiring Software Developer who likes to solve his problems with code. I enjoy creating software solutions that aim to solve realworld problems and that give back to my community. Scroll down to learn more about me!",
  image: "./images/profile-picture.png",
  bio: "I am currently in 3rd year of my Computer Science degree. Currently working at my first co-op as an intern at Munich Reinsurance, Toronto, ON.",
  email: "anshulskhatri@gmail.com",
  address: {
    city: "Waterloo",
    province: "Ontario",
    Country: "Canada",
  },
  resumedownload:
    "https://drive.google.com/file/d/1TknsrzEppYPt1biUx7y_3HGcaezysvpL/view?usp=sharing",
  socials: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/anshul-khatri/",
      className: "fa fa-linkedin-square",
    },
    {
      name: "github",
      url: "https://github.com/khat3680",
      className: "fa fa-github",
    },
    {
      name: "instagram",
      url: "http://instagram.com/lifeofanshul",
      className: "fa fa-instagram",
    },
    {
      name: "skype",
      url: "https://join.skype.com/invite/tirMHGP5eT2P",
      className: "fa fa-skype",
    },
    {
      name: "twitter",
      url: "https://twitter.com/AnshulK50030072",
      className: "fa fa-twitter",
    },
  ],
  education: [
    {
      school: "Wilfrid Laurier University",
      degree: "Undergrad in Computer Science with Mathematics Minor",
      duration: "Sept 2019 - Present",
      description:
        "Describe your experience at school, what you learned, what useful skills you have acquired etc.",
    },
    // If you have more education experience then just copy the section above and repeat for as many experience.
  ],
  work: [
    {
      company: "Munich Reinsurance",
      title: "P&C Underwriting Support Co-op",
      duration: "Sep 2021 - Dec 2021",
      description:
        "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.",
    },
    {
      company: "Wilfird Laurier University",
      title: "Research Assistant",
      duration: "Oct 2020 - Apr 2021",
      description:
        "Learnt to create simulation projects on hard to learn Physics concepts using JavaScript, CSS and HTML which lead in better and deep understanding. Demonstrated innovation by exploring and enhancing legacy ways of writing code for basic methods. Investigated best method to make simulation by exploring physics principles. Engineered the full project alone from scratch to final version. Tested numerous prototypes until reaching the final version, briefed a guide to make one as well.",
    },
    {
      company: "The UPS Store",
      title: "Sales Manager",
      duration: "Nav 2019 - Mar 2020",
      description:
        "Offered each customer top-notch and polite support in a fast-paced environment to boost sales and customer satisfaction. Employed strategic tactics like cross-selling and upselling to drive sales. Boosted store sales by 27% in 2 months. • Diligently performed store opening and closing which includes all end-of the day operations and managing the money and Moneris receipts including overall managing of the store.",
    },
  ],
  extracurricular: [
    {
      activity: "Artificial Intelligence Club",
      role: "President",
      duration: "Jan 2021 - Present",
      responsibilities:
        "Established the Artificial Intelligence Club at university to encourage all students to talk about new concepts in AI to share among other members and a place to destress. Members of the club spent 2 hours a week on average, collaborative programming with other members of the club to share learnings. Grew to 27 highly active and engaged members.",
    },

    {
      activity: "Laurier Automotive Society",
      role: "Vice President of Events",
      duration: "Sep 2020 - Present",
      responsibilities:
        "Established the artificial intelligence club at university to encourage all students to talk about new concepts in AI to share among other members and a place to destress. Members of the club spent 2 hours a week on average, collaborative programming with other members of the club to share learnings. Grew to 27 highly active and engaged members.",
    },

    {
      activity: "Wilfrid Laurier University Students' Union",
      role: "Food Bank General",
      duration: "Sep 2020 - Present",
      responsibilities:
        "Collaborated with team by delivering food packets to those in need, helped over 12 students during pandemic.",
    },
    {
      activity: "Wilfrid Laurier University Students' Union",
      role: "Orientation Week Icebreaker",
      duration: "Sep 2020 - Present",
      responsibilities:
        "Provided value to new incoming students by sharing useful experience, made long lasting connections with over 30 new students.",
    },
  ],

  projects: [
    {
      title: "StockEye",
      description:
        "Developed a Twitter Sentiments analysis web app, using React, Twitter API, Django & Machine Learning: NLP and deployed on Heroku. Practiced the Software Development Life Cycle: Agile. This app filters sentiments from tweets on a stock ticker about its performance & generates sentiment score report.",
      image: "./images/portfolio/graph.jpg",
      url: "https://github.com/LeronBergelson/StockEye/tree/Anshul-dev",
    },
    {
      title: "Ristorante Confusion",
      description:
        "Developed a hybrid mobile and web compatible app using MERN stack i.e., ReactJs, React Native, and Redux, further implemented NodeJS server, using ExpressJS and RESTful API calls, initialized features for customers to create personalized account, browse the menu, book Dine-in and add reviews.",
      image: "./images/portfolio/black.png",
      url: "https://github.com/khat3680/confusion",
    },
    {
      title: "Tesla Sentiments",
      description:
        "Using Python libraries like: Pandas, Scikit-learn, & StatsModels, analyzed Tesla’s stock and its related news to find a relation between them to predict future stock price. Worked on data preprocessing to get best out of it.",
      image: "./images/portfolio/graph.jpg",
      url: "https://github.com/khat3680/tesla_sentiments",
    },
    {
      title: "Study-Buddy Discord Bot",
      description:
        "Created a bot using python: discord.py and Google Cloud SQL. This bot allows a user to create a class by providing a name, description, and name of the class's teacher to the bot. Users can add people to the class, can view assignments and exams by simply a command in Discord.",
      image: "./images/portfolio/black.jpeg",
      url: "https://devpost.com/software/studybuddy-e62pog",
    },
    {
      title: "Vending Machine",
      description:
        "Developed a vending machine using Java and libraries like JavaFX, SwingX, practised object-oriented programming. Users can select their product they want to buy, pay via cash or card.",
      image: "./images/portfolio/black.jpg",
      url: "https://github.com/khat3680/Vending_Machine_Java",
    },
  ],
};

export default resumeData;
