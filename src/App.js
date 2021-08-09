import './App.css';
import { data } from "./SpeakerData.js";
import Speaker from "../src/components/Speaker.js";
import Header from "../src/components/Header.js";
import SpeakersToolbar from "../src/components/SpeakersToolbar";


//IndexPage component consumes Sessions component & Sessions consumes Session

function IndexPage() {

    return (
        <div className="container speakers-list">
            <Header />
            <SpeakersToolbar />
            <div className="row">
                {data.map(function (speaker) {

                    return (
                        <Speaker key={speaker.id} speaker={speaker} />
                        );
                })}
            </div>
        </div>
  );
}

export default IndexPage;
