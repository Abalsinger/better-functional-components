import './App.css';
import { data } from "./SpeakerData.js";
import Speaker from "../src/components/Speaker.js"



//IndexPage component consumes Sessions component & Sessions consumes Session

function IndexPage() {

    return (
        <div className="container speakers-list">
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
