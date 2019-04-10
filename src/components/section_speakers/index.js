import React from "react";

import Diego from "../images/speaker_diego_paez";
import Andrea from "../images/speaker_andrea_griffiths";
import Miguel from "../images/speaker_miguel_bolivar";
import Anna from "../images/speaker_cropped_anna";
import Erick from "../images/speaker_erick-wendel";
import Bnb from "../images/speaker_bnb";
import Kat from "../images/speaker_kat";
import James from "../images/speaker_james";
import Rauch from "../images/speaker_rauch";
import Matt from "../images/speaker_matt";
import Ujjwal from "../images/speaker_ujjwal";
import Vladimir from "../images/speaker_vladimir";
import Kevin from "../images/speaker_kevin";
import CountryCol from "../images/country-co";
import CountryVe from "../images/country-ve";
import CountryAr from "../images/country-ar";
import CountryGr from "../images/country-ge";
import CountryBr from "../images/country-br";
import CountryUs from "../images/country-us";
import CountryFr from "../images/country-fr";
import CountryPr from "../images/country-pr";
import CountryIn from "../images/country-in";
import Speaker from "./speaker";

import "./speakers.scss";

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
        country={CountryUs}
        figure={Bnb}
        description="Tierney is a member of the Node.js Community Committee, a Senior Cloud Developer Advocate at Microsoft, and a contributor to various initiatives in the Node.js project focusing on the continued growth and success of the Node.js community."
      />
      <Speaker
        name="Kat Marchán"
        twitterUrl="https://twitter.com/maybekatz"
        country={CountryPr}
        figure={Kat}
        description="npm CLI maintainer; tc39 delegate; wealljs admin; cat mom"
      />
    </div>
    <div className="inner-wrap-desktop additional-row">
      <Speaker
        name="James Snell"
        twitterUrl="https://twitter.com/jasnell"
        country={CountryGr}
        figure={James}
        description="nearForm Community Engineering Manager & Node.js TSC"
      />
      <Speaker
        name="Guillermo Rauch"
        twitterUrl="https://twitter.com/rauchg"
        country={CountryAr}
        figure={Rauch}
        description="Founder of ▲ZEIT, creator of Next.js and Socket.io"
      />
    </div>
    <div className="inner-wrap-desktop additional-row">
      <Speaker
        name="Diego Paez"
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
        description="An informatics engineering student for the last semester, I'm working on my thesis right now, implementing a sentiment analysis app powered by Node to talk with IBM Watson to help the services problems info in my city, focusing all the work towards the transformation of a traditional city into a smart city. I work as a Fullstack developer for Sancrisoft, I've worked for various clients in Colombia, Chile and Ireland, and right now we're working with an USA trucks client for a major startup in the US"
      />
    </div>
    <div className="inner-wrap-desktop single-speaker-row">
      <Speaker
        name="Erick Wendel"
        twitterUrl="https://twitter.com/erickwendel"
        country={CountryBr}
        figure={Erick}
        description="Speaker, Software Consultant and community Co-organizer in Brazil. Named by Microsoft as Most Valuable Professional, and by Google as Google Developer Expert, a specialist in Node.js and Javascript Applications. He is a Software Independent Architect who helps companies to make better and cheaper applications using Serverless architectures, Container based applications, and Hybrid Cloud solutions. He has experience speaking and teaching at the biggest conferences in Brazil and the Americas, working as voluntary Leader of NodeBR, Javascript São Paulo and Nerdzão Communities."
      />
      <Speaker
        name="Matt Podwysocki"
        twitterUrl="https://twitter.com/mattpodwysocki"
        country={CountryUs}
        figure={Matt}
        description="Open Sourcerer at @VSAppCenter Author of RxJS/@ReactiveX TC39 Member @Twitch streamer."
      />
    </div>
    <div className="inner-wrap-desktop second-speaker-row">
      <Speaker
        name="Ujjwal Sharma"
        twitterUrl="https://twitter.com/ryzokuken"
        country={CountryIn}
        figure={Ujjwal}
        description="Core collaborator @nodejs, Prole @electronjs. International Speaker and JavaScript/C++ developer. Helping out with @v8js and @tc39. GSoC mentor and ex-student."
      />
      <Speaker
        name="Vladimir Turckheim"
        twitterUrl="https://twitter.com/poledesfetes"
        country={CountryFr}
        figure={Vladimir}
        description="Web security engineer. @nodejs collaborator .Unicorn admirer, cheese eater, Node.js Software engineer at @SqreenIO tweets are my own. My heart is in @strasbourg."
      />
      <Speaker
        name="Kevin Ball"
        twitterUrl="https://twitter.com/kbal11?s=09"
        country={CountryUs}
        figure={Kevin}
        description="Web Front-end Consultant and Trainer. Panelist @JSPartyFM. Former lead @ZURBFoundation. Coffee addict. He/Him."
      />
    </div>
  </section>
);

export default SectionSpeakers;
