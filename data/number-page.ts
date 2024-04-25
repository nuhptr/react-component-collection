interface INumberPage {
   id: number
   name: string
   description: string
   url: string
}

export const numberPage: INumberPage[] = [
   {
      id: 1,
      name: "Accordion",
      description: "Accordion component",
      url: "/accordion",
   },
   {
      id: 2,
      name: "Color Generator",
      description: "Color generator component",
      url: "/color-generate",
   },
   {
      id: 3,
      name: "Rating",
      description: "Rating component",
      url: "/rating",
   },
   {
      id: 4,
      name: "Slider Image",
      description: "Slider image component",
      url: "/slider",
   },
   {
      id: 5,
      name: "Infinite Load",
      description: "Infinite load component",
      url: "/infinite-load",
   },
   {
      id: 6,
      name: "Modal Popup",
      description: "Modal component",
      url: "/modal-popup",
   },
]
