import { useState } from "react";

import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";

const Scenes = {
    image1: {
        title: "View-1",
        image: image1,
        pitch: -11,
        yaw: -3,
        hotSpot: {
            nexScene: {
                type: "custom",
                pitch: -8,
                yaw: 12,
                cssClass: "moveScene",
                scene: "image2"
            }
        }
    },
    image2: {
        title: "View-2",
        image: image2,
        pitch: 10,
        yaw: 180,
        hotSpot: {
            scene: "image1"
        }
    },
};

export default Scenes;
