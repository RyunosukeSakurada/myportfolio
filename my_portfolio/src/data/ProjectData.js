import selfmanagement from "../assets/self-management.png"
import selfmanagementLg from "../assets/self-management-2.png"
import subscription_tracker from "../assets/subscription-tracker.png"
import subscription_trackerLg from "../assets/subscription-tracker-2.png"
import casalink from "../assets/casalink.png"
import casalinkLg from "../assets/casalink-2.png"
import trivia from "../assets/trivia.png"
import triviaLg from "../assets/trivia-2.png"

export const ProjectData = [
  {
    id:"selfmanagement",
    name:"Selfmanagement App",
    techStacks:['React.js', 'Tailwind','Firebase'],
    description:"The ultimate tool that combines the functionality of a todo app and a journal app in one seamless experience. This app is designed to empower you in managing your tasks, goals, and personal reflections all in a single platform",
    img:selfmanagement,
    features:[
      'Firebase login/logout: Users can securely create an account, log in, and log out using Firebase authentication',
      'Task creation and management: Users can create tasks with priorities and deadlines, and easily manage completed tasks',
      'Journaling for daily events and insights: Users can record their daily experiences, reflections, and insights to facilitate personal growth',
    ],
    vercelLink:"https://self-management-kx9ta2e1i-ryunosukesakurada.vercel.app/",
    githubLink:"https://github.com/RyunosukeSakurada/self-management-app",
    largeImg:selfmanagementLg,
  },
  {
    id:"subscriptiontracker ",
    name:"Subscription Tracker App",
    techStacks:['React.js', 'Tailwind','Firebase'],
    description:"With this app, you can effortlessly keep track of all your subscriptions, including how many you have and the monthly costs associated with each one",
    img:subscription_tracker,
    features:[
      'Firebase login/logout: Users can securely create an account, log in, and log out using Firebase authentication',
      'Subscription management: Users can add subscription details, including the name and monthly cost of each subscription',
      'Total monthly cost tracking: Users can view the total monthly cost of all their subscribed services',
    ],
    vercelLink:"https://subscription-tracker.vercel.app/",
    githubLink:"https://github.com/RyunosukeSakurada/subscription-tracker",
    largeImg:subscription_trackerLg,
  },
  {
    id:"casalink",
    name:"Casalink -Real Estate-",
    techStacks:['React.js', 'Tailwind'],
    description:"Effortlessly explore real estate options in Vancouver. Discover houses, apartments, and shared housing t hat match your location and budget preferences",
    img:casalink,
    features:[
      'Filtering by Vancouver area: Users can refine their search results by specifying specific areas such as Vancouver, Richmond, Burnaby or Surrey ',
      'Filtering by property type: Users can narrow down their search by selecting specific property types, such as houses, apartments, or shared-house',
      'Filtering by price: Users can set price ranges to filter properties that fall within their desired price range'
    ],
    vercelLink:"https://casalink-o0h2wmp8w-ryunosukesakurada.vercel.app/",
    githubLink:"https://github.com/RyunosukeSakurada/Casalink",
    largeImg:casalinkLg,
  },
  {
    id:"trivia",
    name:"Trivia Guru",
    techStacks:['HTML', 'CSS','Javascript'],
    description:"Get ready to test your knowledge in various genres, including movies, books, and more. Choose the number of questions and dive into an engaging quiz experience",
    img:trivia,
    features:[
      'Quiz feature with genre selection and number of questions: Users can participate in quizzes by selecting a specific genre, such as books or movies, and choosing the number of questions they want to answer'
    ],
    vercelLink:"",
    githubLink:"https://github.com/RyunosukeSakurada/trivia_guru",
    largeImg:triviaLg,
  },
]