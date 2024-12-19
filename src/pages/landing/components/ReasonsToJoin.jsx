import ReasonCard from "./ReasonCard"

const ReasonsToJoin = () => {
    const items = [
        {
            title: "Enjoy on your TV",
            desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            img: "../../../assets/images/television.png" 
        },
        {
            title: "Download your shows to watch offline",
            desc: "Save your favorites easily and always have something to watch",
            img: "../../../assets/images/television.png" 
        },
        {
            title: "Watch everywhere",
            desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            img: "../../../assets/images/television.png" 
        },
        {
            title: "Create profiles for kids",
            desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            img: "../../../assets/images/television.png" 
        }
    ]

  return (
    <div>
      {items.map((item)=><ReasonCard item={item}/>)}
    </div>
  )
}

export default ReasonsToJoin
