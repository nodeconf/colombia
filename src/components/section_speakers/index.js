import React from 'react'

import Diego from '../images/speaker_diego_paez'
import Andrea from '../images/speaker_andrea_griffiths'
import Miguel from '../images/speaker_miguel_bolivar'
import Anna from '../images/speaker_cropped_anna'
import Erick from '../images/speaker_erick-wendel'
import Bnb from '../images/speaker_bnb'
import Kat from '../images/speaker_kat'
import James from '../images/speaker_james'
import Rauch from '../images/speaker_rauch'
import CountryCol from '../images/country-co'
import CountryVe from '../images/country-ve'
import CountryAr from '../images/country-ar'
import CountryGr from '../images/country-ge'
import CountryBr from '../images/country-br'
import CountryUS from '../images/country-us'
import Speaker from './speaker'

import './speakers.scss'

const SectionSpeakers = () => ( 

  <section className="section-speakers" id="speakers">
      
    <h2 className="section-speakers__title">Speakers</h2>

    <div className="inner-wrap-desktop first-row">
      <Speaker
        name="Anna Henningsen"
        twitterUrl="https://twitter.com/addaleax"
        country={CountryGr}
        figure={Anna}
        description="Over the last 2 years, Anna has been one of the most active contributors to Node.js core. Currently pursuing a Master’s degree in mathematics in Germany, she is fueled by a passion for Node and its community."
      />
      <Speaker
        name="Tierney Cyren"
        twitterUrl="https://twitter.com/bitandbang"
        country={CountryUS}
        figure={Bnb}
        description="Tierney is a member of the Node.js Community Committee, a Senior Cloud Developer Advocate at Microsoft, and a contributor to various initiatives in the Node.js project focusing on the continued growth and success of the Node.js community."
      />
      <Speaker
        name="Kat Marchán"
        twitterUrl="https://twitter.com/maybekatz"
        country={CountryUS}
        figure={Kat}
        description="npm CLI maintainer; tc39 delegate; wealljs admin; cat mom"
      />
    </div>
    <div className="inner-wrap-desktop additional-row">
      <Speaker
        name="James Snell"
        twitterUrl="https://twitter.com/jasnell"
        country={CountryUS}
        figure={James}
        description="nearForm Community Engineering Manager & Node.js TSC"
      />
      <Speaker
        name="Guillermo Rauch"
        twitterUrl="https://twitter.com/rauchg"
        country={CountryUS}
        figure={Rauch}
        description="Founder of ▲ZEIT, creator of Next.js and Socket.io"
      />
    </div>
    <div className="inner-wrap-desktop additional-row">
      <Speaker
        name="Diego Paes"
        twitterUrl="https://twitter.com/carax"
        country={CountryAr}
        figure={Diego}
        description="JS developer with a Computer Science degree and a passion for HCI. He was born in the southernmost place in America, Tierra del Fuego but he is living in La Plata these days where he co-founded GEUT along with Martin and Max. He also loves the community, in fact, in 2014 he co-founded LaPlataJS a local JS community."
      />
      <Speaker
        name="Andrea Griffinths"
        twitterUrl="https://twitter.com/AlaColombia"
        country={CountryCol}
        figure={Andrea}
        description="Community Support @GitHub, @USArmy Veteran, 🇨🇴 Immigrant Latina in technology, OSS superfan, & breast cancer slayer. She/Her/Hers. Opiniones son mías."
      />
      <Speaker
        name="Miguel Bolivar"
        twitterUrl="https://twitter.com/darking360"
        country={CountryVe}
        figure={Miguel}
        description="An informatics engineering student for the last semester, I'm working on my thesis right now, implementing a sentiment analysis app powered by Node to talk with IBM Watson to help the services problems info in my city, focusing all the work towards the transformation of a traditional city into a smart city. I work as a Fullstack developer for Sancrisoft, I've worked for various clients in Colombia, Chile and Ireland and US"
      />
    </div>
    <div className="inner-wrap-desktop single-speaker-row">
      <Speaker
        name="Erick Wendel"
        twitterUrl="https://twitter.com/erickwendel_"
        country={CountryBr}
        figure={Erick}
        description="Speaker, Software Consultant and community Co-organizer in Brazil. Named by Microsoft as Most Valuable Professional, and by Google as Google Developer Expert, a specialist in Node.js and Javascript Applications. He is a Software Independent Architect who helps companies to make better and cheaper applications using Serverless architectures, Container based applications, and Hybrid Cloud solutions."
      />
    </div>
  </section>

)


export default SectionSpeakers