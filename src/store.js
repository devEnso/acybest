import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 9,
  pages: 8.5,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "Packaging Desing 01",
      image: "image/se-11.png",
      aspect: 1.51,
      text: "Packaging design is the process of designing product packaging to securely contain, identify and deliver a product."
    },
    {
      offset: 2,
      factor: 2.0,
      header: "2",
      image: "image/se-12.png",
      aspect: 1.5,
      text:
        "Packaging design is the process of designing product packaging to securely contain, identify and deliver a product"
    },
    {
      offset: 3,
      factor: 2.25,
      header: "3",
      image: "image/se-13.png",
      aspect: 1.5037,
      text:
        "Packaging design is the process of designing product packaging to securely contain, identify and deliver a product"
    },
    {
      offset: 4,
      factor: 2.0,
      header: "4",
      image: "image/se-04.png",
      aspect: 0.665,
      text:
        "Instagram Post"
    },
    {
      offset: 5,
      factor: 1.75,
      header: "5",
      image: "image/se-09.png",
      aspect: 1.55,
      text:
        "Mobile Design."
    },
    { offset: 7, factor: 1.05, header: "6", image: "image/se-08.png", aspect: 1.77, text: "Web Design." }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 0.6, factor: 1.8 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 0.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 0.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 1.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 0.8, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 1.5, factor: 6 }
  ],
  top: createRef()
}

export default state
