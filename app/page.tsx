import React from "react";
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">Botify</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* {sun icon} */}
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">&quot;Explain something to me&quot;</p>
            <p className="infoText">
              &quot;What is difference between a dog and cat&quot;
            </p>
            <p className="infoText">
              &quot;What is the color of the sun?&quot;
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* {sun icon} */}
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">&quot;Used Firebase to chat&quot;</p>
            <p className="infoText">
              &quot;Messages are stored in firestore&quot;
            </p>
            <p className="infoText">
              &quot;Not Toast notifications when Botify is Thinking!&quot;
            </p>
          </div>
        </div>{" "}
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* {sun icon} */}
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitaions</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              &quot;May occasionally generate incorrect information&quot;
            </p>
            <p className="infoText">
              &quot;May occasionally produce harmful or biased content&quot;
            </p>
            <p className="infoText">
              &quot;Limited knowledge of world and events after 2021&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
