import treasureImg from './images/hunt.png'
import tictactoeImg from './images/tictactoe.png'
import talkImg from './images/responsive.png'
import portfolioImg from './images/portfolio.png'
import batterImg from './images/BatterUp.png'
import chillImg from './images/chill.png'
import toolImg from './images/toolshare.png'
import memoryImg from './images/memory.png'
import rqtImg from './images/rqt.png'

export const colorBox = {
                        date: 'December 2018',
                        title: 'Color Box',
                        description: `Color Box was my introduction to React and
                        state changes.`,
                        tech: 'React',
                        comment: 'Click',
                      }

export const lightSwitch = {
                        date: 'December 2018',
                        title: 'Light Switch',
                        description: `Light Switch was another lesson in state
                        changes while also teaching me about the relationship
                        between parent and child components.`,
                        tech: 'React, GIMP',
                        code: 'https://github.com/bcree11/light-switch-app',
                        comment: 'Click',
                      }

export const treasure = {
                        date: 'December 2018',
                        title: 'Treasure Hunt',
                        description: `This was my holiday rendition of the
                        classic treasure hunt game. Try to find the present before
                        you get caught and end up with a lump of coal!`,
                        tech: 'React, Bootstrap',
                        code: 'https://github.com/bcree11/christmas-treasure-hunt-app',
                        image: treasureImg,
                        link:'/christmas-present-hunt',
                        linkText:'Play',
                      }

export const tictactoe = {
                        date: 'January 2019',
                        title: 'Tic Tac Toe',
                        description: `Tic Tac Toe taught me how powerful React
                        can be. I learned about maintaining state, passing props,
                        and how to deal with user interactions. The app keeps
                        track of the users' scores versus one another, switches
                        which user goes first after every round and prompts that person,
                        highlights the winning combination, and allows
                        the users to reset the board in order to keep the current
                        score or to reset the game entirely.`,
                        tech: 'React, GIMP, Bootstrap',
                        code: 'https://github.com/bcree11/tic-tac-toe-app',
                        image: tictactoeImg,
                        link: '/tic-tac-toe',
                        linkText: 'Play',
                      }

export const tech_talk = {
                        date: 'January 2019',
                        title: 'Tech Talk',
                        description: `I did a tech talk on responsive design for
                        my bootcamp cohort. I choose this topic because I had
                        recently begun working on my portfolio website and was
                        learning a lot about the topic. I wanted to share with
                        them things that tripped me up and how to overcome them
                        , along with new techniques that I learned. I built an
                        app, link below, to give live examples of the topics I
                        discussed.`,
                        tech: 'React, Bootstrap, React-Router',
                        code: 'https://github.com/bcree11/tech-talk',
                        image: talkImg,
                        imageSize: 'contain',
                        link: '/tech-talk',
                        linkText: 'Link',
                      }

export const portfolio = {
                        date: 'January 2019',
                        title: 'Portfolio',
                        description: `I started this project in mid-January in
                        order to get a better grasp on React. Every time I
                        learned something new I updated the code or, in some
                        cases, started over from scratch. Currently on version
                        3, I've learned a lot from this project.`,
                        tech: 'React, React-Router, Material-UI, Materialize, Bootstrap',
                        code: [
                          {id: 1, version: 'https://github.com/bcree11/PortfolioWebsite'},
                          {id: 2, version: 'https://github.com/bcree11/portfolio-v2'},
                          {id: 3, version: 'https://github.com/bcree11/portfolio-v3'}
                        ],
                        image: portfolioImg,
                      }

export const batter = {
                        date: 'March 2019',
                        title: 'Batter Up!',
                        description: `Baseball Hack Day 2019 San Diego 2nd
                        Place Winner. See Devpost link below for more details.`,
                        tech: 'React, Python',
                        code: 'https://devpost.com/software/batter-up-yudmpt',
                        image: batterImg,
                        link: 'https://devpost.com/software/batter-up-yudmpt',
                        linkText: 'Devpost',
                        comment: 'Baseball Hack Day 2019 San Diego 2nd Place Winner'
                      }

export const tool = {
                        date: 'February 2019',
                        title: 'ToolShare',
                        contribution: [
                          {id: 1, text: 'Set up Rails and react-rails'},
                          {id: 2, text: `Constructed app's routes and controllers`},
                          {id: 3, text: 'Created the app\'s tools table'},
                          {id: 4, text: 'Built the unauth and auth pages'},
                          {id: 5, text: `Set up Devise, along with strong params
                            to allow new fields in the user table`},
                          {id: 6, text: `Built the CRUD method in React and
                            used the Fetch API to manipulated data`},
                          {id: 7, text: `Utilized two Google APIs, Maps Javascript
                            and Geocode, to show renter's the area the tool's
                            owner wants to meet in`},
                          {id: 8, text: `Set up Mailboxer so that users can DM
                            one another`},
                        ],
                        description: `ToolShare was my group's final project.
                        We were given two weeks to build a full stack Rails
                        single page app from the ground up. The app gives users
                        a platform that they can use to rent out tools or rent
                        them or both.`,
                        tech: `Rails, React (using react-rails gem), PostgreSQL,
                        Devise, Google Maps API, Mailboxer, React-Router,
                        Moment.js`,
                        code: 'https://github.com/team-pacific-drive/ToolShare',
                        image: toolImg,
                        link: 'https://hidden-tundra-14844.herokuapp.com/',
                        linkText: 'Link',
                      }

export const discrete = {
                        date: 'March 2019',
                        title: 'Discrete Chill',
                        contribution: [
                          {id: 1, text: `Built a MERN stack CRUD app utilizing and MySQL, Express.js, React.js, and Node.js`},
                          {id: 2, text: `Converted our boilerplate React app into Next.js in order to reap the benefits of server-side-rendering`},
                          {id: 3, text: `Utilized AWS Amplify and Amazon Cognito as a means for user authentication`},
                          {id: 4, text: `Created fully accessible web pages`},
                          {id: 5, text: `Utilized Sequelize as our ORM to help manage queries to our MySQL database`}
                        ],
                        description: `As part of my internship, I had to build
                        a MERN stack app from scratch.`,
                        tech: `React, MySQL, Express, Node.js, Next.js,
                        Sequelize, AWS Amplify, Amazon Cognito, Material-UI`,
                        code: 'More information upon request',
                        image: chillImg,
                        imageSize: 'contain',
                      }

export const memory = {
                        date: 'April 2019',
                        title: 'Memory Card Game',
                        description: `Memory card game I created for a coding
                        challenge. It calls on an API, 'Deck of Cards', turns
                        that data into JSON, and then fetches that data to
                        display on the page as cards.`,
                        tech: 'React',
                        code: 'https://github.com/bcree11/concentration-card-game',
                        image: memoryImg,
                        link: '/memory-card-game',
                        linkText: 'Play',
                      }

export const rqt = {
                        date: 'May 2019',
                        title: 'react-quick-template',
                        description: `Built and published this CLI to the npm
                        Registry (react-quick-template). It instantly generates
                        a new file with React component templates. It can also
                        produce directories and sub-directories. This package
                        was created using Node.js and oclif.`,
                        tech: `Node.js, oclif`,
                        code: 'https://github.com/bcree11/react-template-cli',
                        image: rqtImg,
                        link: 'https://www.npmjs.com/package/react-quick-template',
                        linkText: 'Link',
                      }
