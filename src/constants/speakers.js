import Anna from "../components/images/speaker_cropped_anna";
import Diego from "../components/images/speaker_diego_paez";
import Andrea from "../components/images/speaker_andrea_griffiths";
import Miguel from "../components/images/speaker_miguel_bolivar";
import Erick from "../components/images/speaker_erick-wendel";
import Bnb from "../components/images/speaker_bnb";
import Kat from "../components/images/speaker_kat";
import James from "../components/images/speaker_james";
import Rauch from "../components/images/speaker_rauch";
import Ruben from "../components/images/speaker_ruben";
import Matt from "../components/images/speaker_matt";
import Ujjwal from "../components/images/speaker_ujjwal";
import Vladimir from "../components/images/speaker_vladimir";
import Kevin from "../components/images/speaker_kevin";
import CountryCol from "../components/images/country-co";
import CountryVe from "../components/images/country-ve";
import CountryAr from "../components/images/country-ar";
import CountryBr from "../components/images/country-br";
import CountryUs from "../components/images/country-us";
import CountryFr from "../components/images/country-fr";
import CountryPr from "../components/images/country-pr";
import CountryIn from "../components/images/country-in";
import CountryGr from "../components/images/country-ge";

export const speakers = {
  anna: {
    name: 'Anna Henningsen',
    twitterUrl: 'https://twitter.com/addaleax',
    country: CountryGr,
    figure: Anna,
    talkName: 'Node.js Core - Livecoding',
    description: 'Over the last 2 years, Anna has been one of the most active contributors to Node.js core. Currently pursuing a Master’s degree in mathematics in Germany, she is fueled by a passion for Node and its community.',
    talkDesc: 'Anna re-builds a simple Node.js core feature from scratch on stage, giving insight into the internals of Node.js and the process around making changes to Node core.'
  },
  diego: {
    name: 'Diego Paez',
    twitterUrl: 'https://twitter.com/carax',
    country: CountryAr,
    figure: Diego,
    talkName: 'Building up on Dat',
    description: 'JS developer with a Computer Science degree and a passion for HCI. He was born in the southernmost place in America, Tierra del Fuego but he is living in La Plata these days where he co-founded GEUT along with Martin and Max. He also loves the community, in fact, in 2014 he co-founded LaPlataJS a local JS community.',
    talkDesc: 'Let’s imagine together a better future where users own their data and they know whom they are sharing with. No middleman. Let’s think about a future with resilient and decentralized communities of peers. Sounds interesting? Now let’s go a bit further, imagine the kind of apps or services that can be run on these networks. Communities will surely benefit from that. Sounds empowering, doesn’t it? It is, very much indeed! Start building the future today using Dat.'
  },
  matt: {
    name: 'Matt Podwysocki',
    twitterUrl: 'https://twitter.com/mattpodwysocki',
    country: CountryUs,
    figure: Matt,
    talkName: 'Our Past, Present and Future of Asynchronous Programming in JavaScript',
    description: 'Open Sourcerer at @VSAppCenter Author of RxJS/@ReactiveX TC39 Member @Twitch streamer.',
    talkDesc: 'Asynchronous programming is a way of life with JavaScript. But, how did we get to where we are today? And where are we going in the future? In this highly interactive session or is it reactive, we will talk about the past of asynchronous programming, its present, and what might be in the future and how a one sized fits all solution is never the answer! And no monads were harmed in the making of this presentation...'
  },
  james: {
    name: 'James Snell',
    twitterUrl: 'https://twitter.com/jasnell',
    country: CountryUs,
    figure: James,
    talkName: 'A QUIC Update for Node.js',
    description: 'nearForm Community Engineering Manager & Node.js TSC',
    talkDesc: 'Work is currently underway to develop an implementation of the new QUIC protocol with Node.js core. While still very experimental and new, this protocol will enable exciting new possibilities and applications. This talk will introduce the fundamentals of QUIC and the prototype implementation being developed.'
  },
  andrea: {
    name: 'Andrea Griffinths',
    twitterUrl: 'https://twitter.com/AlaColombia',
    country: CountryCol,
    figure: Andrea,
    talkName: 'Tan Egoista! OSS to level up your career, reputation or to get your first job',
    description: 'Community Support @GitHub, @USArmy Veteran, 🇨🇴 Immigrant Latina in technology, OSS superfan, & breast cancer slayer. She/Her/Hers. Opiniones son mías.',
    talkDesc: `Regardless of where you are in your developer journey chances are one or more of your projects are using OSS, there is a space in the OSS ecosystem for contributions of all types and skill levels.
    <br/><br/>Contributing to open source projects is an effective way to build up your reputation, level up your skills or get your first job. In this talk, I'll share how to make your OSS contributions more valuable to align them to your career goals, and if you are not contributing yet you will walk away with a clear contribution plan.`
  },
  miguel: {
    name: 'Miguel Bolivar',
    twitterUrl: 'https://twitter.com/darking360',
    country: CountryVe,
    figure: Miguel,
    talkName: '☢️ Common JS anti-patterns ⚠️ Impostor syndrome included ☣️',
    description: 'An informatics engineering student for the last semester, I\'m working on my thesis right now, implementing a sentiment analysis app powered by Node to talk with IBM Watson to help the services problems info in my city, focusing all the work towards the transformation of a traditional city into a smart city.',
    talkDesc: 'When entering a junior developer job (or any job) in any startup/company/agency, the first thought of young developers is “I’m going to eat the world” 🌎 and in most of the cases they do, but sadly many times we encountered this huge invisible wall 🏗 that stops us from coming to the right solution to a problem, a database normalization, a circular dependency unresolved, a bad scope variable naming that drives us crazy for 3 hours 😡 and in most of these cases we think as developers that we are the problem 🤕 But this happens at every level in the industry 😱 How can we be better programmers? Better tech leaders? Better senior developers.'
  },
  tierney: {
    name: 'Tierney Cyren',
    twitterUrl: 'https://twitter.com/bitandbang',
    country: CountryUs,
    figure: Bnb,
    talkName: 'Automating Your Vulnerabilities Away',
    description: 'Tierney is a member of the Node.js Community Committee, a Senior Cloud Developer Advocate at Microsoft, and a contributor to various initiatives in the Node.js project focusing on the continued growth and success of the Node.js community.',
    talkDesc: 'Your apps are insecure. Not because of third-party dependenceis, but because of the runtime itself. Node.js actively ships security updates, patching publicly disclosed vulnerabilities... and you\'re not shipping them into production. This talk will go over how you can manage Node.js versions for production to ensure that you\'re always safe.'
  },
  erick: {
    name: 'Erick Wendel',
    twitterUrl: 'https://twitter.com/erickwendel_',
    country: CountryBr,
    figure: Erick,
    talkName: '10 secrets to improve Javascript Performance',
    description: 'Speaker, Software Consultant and community Co-organizer in Brazil. Named by Microsoft as Most Valuable Professional, and by Google as Google Developer Expert, a specialist in Node.js and Javascript Applications. Also working as voluntary Leader of NodeBR, Javascript São Paulo and Nerdzão Communities.',
    talkDesc: 'The Javascript is performing many upgrades in their language and asynchronous operations on each release. Thousands of developers are creating new apps using Javascript on backend, frontend and cloud platforms. On production environments, we need to think about the possible problems avoiding the network overhead, memory and CPU usage. Attendees will learn how to avoid common mistakes, how to use the util node.js core module and how to respect the Javascript workflow to write faster and productive projects. We will show examples to make applications faster with simple adjusts that could be useful in production environments.'
  },
  vladimir: {
    name: 'Vladimir Turckheim',
    twitterUrl: 'https://twitter.com/poledesfetes',
    country: CountryFr,
    figure: Vladimir,
    talkName: 'Applicative DoS in Node.js',
    description: 'Web security engineer. @nodejs collaborator .Unicorn admirer, cheese eater, Node.js Software engineer at @SqreenIO tweets are my own. My heart is in @strasbourg.',
    talkDesc: 'Do you want to learn how to break Node.js applications? This talk is for you, we will talk about Denial of Service in Node.js applications leveraging Regexps and MongoDB injections! (oh yeah we will learn about MongoDB injections too).'
  },
  ujjwal: {
    name: 'Ujjwal Sharma',
    twitterUrl: 'https://twitter.com/ryzokuken',
    country: CountryIn,
    figure: Ujjwal,
    talkName: 'State of crypto in Node.js',
    description: 'Core collaborator @nodejs, Prole @electronjs. International Speaker and JavaScript/C++ developer. Helping out with @v8js and @tc39. GSoC mentor and ex-student.',
    talkDesc: `Cryptography is all around us, and that’s a good thing. In a world that increasingly depends on data, leveraging cryptography is mandatory for any modern application that deals with private user data.
    <br/><br/>As a Node.js core team member, I will focus on the current state of cryptography in Node.js regarding security, interoperability and performance: What has happened, what is about to happen? What are our long-term plans?
    <br/><br/>Node.js is made for the web and already well-equipped for the challenges of cryptography in today’s applications! You will come away with a deeper understanding of some of these challenges and how to solve them using the Node.js crypto module (and how not to!).`
  },
  kat: {
    name: 'Kat Marchán',
    twitterUrl: 'https://twitter.com/maybekatz',
    country: CountryPr,
    figure: Kat,
    talkName: 'tink: A next generation package manager for JavaScript',
    description: 'npm CLI maintainer; tc39 delegate; wealljs admin; cat mom',
    talkDesc: 'tink is a new package manager by the npm team that explores a new paradigm for managing JavaScript dependencies: shared cache that eliminates most of node_modules, faster install times, ESM support, and more!'
  },
  guillermo: {
    name: 'Guillermo Rauch',
    twitterUrl: 'https://twitter.com/rauchg',
    country: CountryAr,
    figure: Rauch,
    talkName: 'TBD',
    description: 'Founder of ▲ZEIT, creator of Next.js and Socket.io',
    talkDesc: ''
  },
  ruben: {
    name: 'Ruben Bridgewater',
    twitterUrl: 'https://twitter.com/bridgear',
    country: CountryGr,
    figure: Ruben,
    talkName: 'Error handling: doing it right!',
    description: 'Node.js core collaborator and a freelance software architect consultant. His main emphasis is building powerful and easy-to-use APIs for scalable and fast applications. He is continuously working with the V8 team and the TC39 committee to improve the developer experience with JavaScript.',
    talkDesc: `A journey into the asynchronous debugging horrors, how to avoid them and what patterns can be used to ease the life of each developer debugging applications.
    <br/><br/>We all have run into issues debugging JavaScript. Knowing what went wrong due to missing stack traces in asynchronous contexts and finding the actual issue takes way too long. Especially code with promises can be tedious to debug. Following best practices in error handling reduces debugging time and improves the code base a lot!`
  },
  kevin: {
    name: 'Kevin Ball',
    twitterUrl: 'https://twitter.com/kbal11',
    country: CountryUs,
    figure: Kevin,
    talkName: '',
    description: 'Web Front-end Consultant and Trainer. Panelist @JSPartyFM. Former lead @ZURBFoundation. Coffee addict. He/Him.',
    talkDesc: ''
  },
  jesus: {
    name: 'Jesús David Sanchez, Software Engineer @ PSL',
    country: CountryCol,
    figure: Kevin,
    talkName: 'Construyendo chatbots escalables y multi-lenguaje desde cero',
    description: '',
    talkDesc: 'En este workshop práctico aprenderemos cómo construir un proyecto escalable y  multi-lenguaje  para múltiples plataformas desde la perspectiva de un chatbot. Compartiremos nuestra experiencia en proyectos similares, buenas practicas y nuestras recomendaciones sobre qué no hacer.'
  },
  ns: {
    name: '',
    country: CountryCol,
    figure: Kevin,
    talkName: 'Profile & Analyze Node.js Applications like a Pro',
    description: '',
    talkDesc: 'Aprenderemos a analizar y diagnosticar gráficos relevantes en el mundo de Node.js como flamegraphs y Heapsnapshot, dándonos el poder de entender el CPU profile, la memorias. soportaremos notificaciones en webhooks.'
  },
  geniusSports: {
    name: '',
    country: CountryCol,
    figure: Kevin,
    talkName: 'Deploying services continuously',
    description: '',
    talkDesc: `We will be deploying a a small set of services onto Istio, using canary releases and traffic shifting to safely roll the services out.
    <br/><br/>We will talk about identifying KPI's for node web servers and detecting deviation from the norm.
    <br/><br/>We will show examples of performance tests that can be run in advance of releases on lower environments using Gatling
    <br/><br/>Examples linking these releases to Gitlab pipelines will be provided that you can apply yourself after the fact.
    <br/><br/>Time based monitoring using prometheus/grafana  and setting up detailed dashboards that help you identify issues.
    <br/><br/>We will supply code examples and scripts to setup your cluster on AWS and seed a gitlab pipeline`
  }
}


// # [Workshop] - Profiling & Analysis Node.js Applications like a Pro
// Aprenderemos a analizar y diagnosticar gráficos relevantes en el mundo de Node.js como flamegraphs y Heapsnapshot, dándonos el poder de entender el CPU profile, la memorias. soportaremos notificaciones en webhooks.

// Ejercicios
// Identificar Idle en Profiles. (esperando un recurso de un backend)
// Abuso de State Managers. (Observables/Redux)
// Server Side Rendering. (Performance/Cost)
// Bloqueo de Event Loop. (Notificaciones)
// Uso de recursos y Out of Memory en Node.js. (Limites/Garbage Collection)
// Requisitos
// Node.js (min v8.x)
// Docker
// Editor Texto