import SwiftSearchImg from '../public/project-image/swift-search.png'
import HabbitSpaceImg from '../public/project-image/habbit-space.png'
import AppointMeetImg from '../public/project-image/appoint-meet.png'
import ParkSpotImg from '../public/project-image/park-spot.png'
import EmployeeManagementSystemImg from '../public/project-image/employee-management-system.png'
import MissingPersonReportImg from '../public/project-image/missing-person-report.png'
import hackerrankAutomationImg from '../public/project-image/hackerrank-automation.png'
import imdbCloneImg from '../public/project-image/imdb-clone.png'
import cricinfoscrapperImg from '../public/project-image/cric-infoscapper.png'
import TODOStackImg from '../public/project-image/TODO-Stack.png'
import VacFaceImg from '../public/project-image/vacface.png'

import tailwindSvg from '../public/technology-icon/tailwind-css-icon.svg'
import pptrdevSvg from '../public/technology-icon/pptrdev-icon.svg'
import javaScriptSvg from '../public/technology-icon/javascript.svg'
import typeScriptSvg from '../public/technology-icon/typescript.svg'
import pythonSvg from '../public/technology-icon/python.svg'
import opencvSvg from '../public/technology-icon/opencv.svg'
import arduinoSvg from '../public/technology-icon/arduino.svg'
import androidSvg from '../public/technology-icon/android.svg'
import nodejsSvg from '../public/technology-icon/nodejs.svg'
import djangoSvg from '../public/technology-icon/django.svg'
import reactSvg from '../public/technology-icon/react.svg'
import EjsSvg from '../public/technology-icon/ejs.svg'
import postgresqlSvg from '../public/technology-icon/postgresql.svg'
import expressSvg from '../public/technology-icon/express.svg'
import jwtSvg from '../public/technology-icon/jwt.svg'
import mongodbSvg from '../public/technology-icon/mongodb.svg'
import electronSvg from '../public/technology-icon/electron.svg'
import redisSvg from '../public/technology-icon/redis.svg'
import azureSvg from '../public/technology-icon/azure.svg'
import dockerSvg from '../public/technology-icon/docker.svg'
import githubActionsSvg from '../public/technology-icon/github-actions.svg'
import elasticsearchSvg from '../public/technology-icon/elasticsearch.svg'
import expoSvg from '../public/technology-icon/expo.svg'
import chakraUiSvg from '../public/technology-icon/chakra-ui.svg'
import kibanaSvg from '../public/technology-icon/kibana.svg'
import digitalOceanSvg from '../public/technology-icon/digital-ocean.svg'
import pwaSvg from '../public/technology-icon/pwa.svg'
import uiKittenSvg from '../public/technology-icon/ui-kitten.svg'
import antDesignSvg from '../public/technology-icon/ant-design.svg'
import herokuSvg from '../public/technology-icon/heroku.svg'

import htmlSvg from '../public/technology-icon/html-5.svg'
import cssSvg from '../public/technology-icon/css-3.svg'
import sassSvg from '../public/technology-icon/sass.svg'
import nextjsSvg from '../public/technology-icon/nextjs.svg'
import gatsbySvg from '../public/technology-icon/gatsby.svg'
import nginxSvg from '../public/technology-icon/nginx.svg'
import gitSvg from '../public/technology-icon/git-icon.svg'
import elkSvg from '../public/technology-icon/elk.svg'
import datadogSvg from '../public/technology-icon/datadog.svg'

export let projects = [
  {
    title: 'Hackerrank Automation',
    projectURL: 'hackerrank-automation',
    type: 'NodeJS Script',
    projectImg: hackerrankAutomationImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'A web automation application which has ability to add multiple moderators into hackerrank contests',
    descriptionLong:
      'I wrote a script using puppeteer which automates the process of login and adding multiple moderators to multiple contests in hackerrank. The purpose of writing this script was to get familiar with automation and async-await in JavaScript, while having a little fun.',
    button: {
      viewCodeUrl: 'https://github.com/henishpatel/Hackerrank-Automation',
      viewProjectUrl: '',
    },
    technologyUsed: [
      { name: 'NodeJS', img: nodejsSvg },
      { name: 'JavaScript', img: javaScriptSvg },
      { name: 'Puppeteer', img: pptrdevSvg },
    ],
  },
  {
    title: 'IMDB Clone',
    projectURL: 'imdb-clone',
    type: 'Web Application',
    projectImg: imdbCloneImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'This is a react project IMDB Clone: this website gives you info about trending movies, you can also add/remove movie to favourite section in which you can read about them, search and sort according to Genre, rating or popularity.',
    descriptionLong:
      'This is a react project IMDB Clone: this website gives you info about trending movies, you can also add/remove movie to favourite section in which you can read about them, search and sort according to Genre, rating or popularity. Responsiveness of this was also kept in mind. This project was made solely for learning purpose.',
    button: {
      viewCodeUrl: 'https://github.com/henishpatel/imdb-clone',
      viewProjectUrl:
        'https://imdb-clone-henish.netlify.app/',
    },
    technologyUsed: [
      { name: 'ReactJS', img: reactSvg },
      { name: 'Javascript', img: javaScriptSvg },
      { name: 'Tailwind', img:  tailwindSvg},
    ],
  },
  {
    title: 'CricInfo Scrapper',
    projectURL: 'CricInfo-Scrapper',
    type: 'NodeJS Script',
    projectImg: cricinfoscrapperImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'A web scrapper application which has ability to scrap any tournament fixtures and keep those matches in excel and folders.',
    descriptionLong:
      'I wrote a script using axios, jsdom, excel4node and pdf4lib which scraps WorldCup 2019 scorecards from cricinfo and stores that in excel sheets and pdf form. The purpose of writing this script was to get familiar with using npm modules and promises in JavaScript.',
    button: {
      viewCodeUrl: 'https://github.com/henishpatel/CricInfo-Scrapper',
      viewProjectUrl: '',
    },
    technologyUsed: [
      { name: 'NodeJS', img: nodejsSvg },
      { name: 'JavaScript', img: javaScriptSvg },
      { name: 'Heruko', img: herokuSvg },
    ],
  },
  {
    title: 'ToDo-Stack',
    projectURL: 'todo-stack',
    type: 'Website',
    projectImg: TODOStackImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'Simple notes taking app or ticket management app with CURD functionality',
    descriptionLong:
      'Simple notes taking app or ticket management app with CURD functionality',
    button: {
      viewCodeUrl: 'https://github.com/henishpatel/TodoStack',
      viewProjectUrl: 'https://henishpatel.github.io/TodoStack/',
    },
    technologyUsed: [
      { name: 'HTML', img: htmlSvg },
      { name: 'CSS', img: cssSvg },
      { name: 'JavaScript', img: javaScriptSvg },
    ],
  },
]
// export default project

export let technologyList = [
  { name: 'HTML', icon: htmlSvg },
  { name: 'CSS', icon: cssSvg },
  { name: 'SASS', icon: sassSvg },
  { name: 'JavaScript', icon: javaScriptSvg },
  // { name: 'TypeScript', icon: typeScriptSvg },
  { name: 'Python', icon: pythonSvg },
  { name: 'React', icon: reactSvg },
  // { name: 'Gatsby', icon: gatsbySvg },
  { name: 'NextJs', icon: nextjsSvg },
  { name: 'Git', icon: gitSvg },
  // { name: 'ElectronJs', icon: electronSvg },
  { name: 'React Native', icon: reactSvg },
  { name: 'Node Js', icon: nodejsSvg },
  { name: 'ExpressJs', icon: expressSvg },
  // { name: 'Django', icon: djangoSvg },
  { name: 'MongoDB', icon: mongodbSvg },
  { name: 'PostgreSql', icon: postgresqlSvg },
  // { name: 'ElasticSearch', icon: elasticsearchSvg },
  // { name: 'The Elastic Stack', icon: elkSvg },
  // { name: 'DataDog', icon: datadogSvg },
  // { name: 'Redis', icon: redisSvg },
  { name: 'Docker', icon: dockerSvg },
  { name: 'Github Actions', icon: githubActionsSvg },
  // { name: 'NginX', icon: nginxSvg },
  { name: 'Heroku', icon: herokuSvg },
  // { name: 'Digital Ocean', icon: digitalOceanSvg },
  // { name: 'Azure', icon: azureSvg },
]
