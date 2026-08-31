import trailer from "@/src/assets/the last garden/trailer the last garden.mp4";
import thelastgardenlogo from "@/src/assets/the last garden/logo.png";
import popuplogo from "@/src/assets/popup/logo.jpg";
import popupgameplay from "@/src/assets/popup/gameplay.mp4";
import citybuildergameplay from "@/src/assets/citybuilder/linkedin post.mp4";
import citybuilderimage from "@/src/assets/citybuilder/game.png";
export const projects = [
  {
    id: "proj-001",
    slug: "the-last-garden",
    title: "The Last Garden",
    date: "2025-06-30",
    year: 2025,
    tags: ["UNITY", "VR", "DESIGN"],
    role: "Lead VR Developer",
    technologies: ["UNITY", "VR", "DESIGN"],
    shortDescription: "A lush, overgrown low-poly post-apocalyptic garden interior in VR.",
    description: "you are mentaining a garden inside a spaceship, and you have to take care of it, and make sure it survives the harsh conditions of space. The game is built in Unity using C# and OVR for VR support.",
    featured: true,
    images: [thelastgardenlogo],
    videos: [trailer],
    links: { build: null, github: null, website: null, video: null, linkedin: "https://www.linkedin.com/posts/youssef-ben-ghorbel-883326262_this-is-the-last-garden-a-vr-story-driven-activity-7339566018580697088-Aien?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEB502MBRZ_Yko9lpng6J8YWR7jkyFafRlU" }
  },
  {
    id: "proj-002",
    slug: "fer-et-savoir-faire",
    title: "Fer et Savoir Faire",
    date: "2025-07-01",
    year: 2025,
    tags: ["GAMEDEV", "UNITY", "VR", "DESIGN"],
    role: "Lead VR Developer",
    technologies: ["GAMEDEV", "UNITY", "VR", "DESIGN"],
    shortDescription: "project under developement",
    description: "project under developement",
    featured: false,
    images: [],
    videos: [],
    links: { build: null, github: null, website: null, video: null, linkedin: "https://www.linkedin.com/posts/youssef-ben-ghorbel-883326262_djerissa-vrapp-tacir-activity-7360754388870520832-wPr8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEB502MBRZ_Yko9lpng6J8YWR7jkyFafRlU" }
  },
  {
    id: "proj-003",
    slug: "jack-magic-beans",
    title: "Jack & the Magic Beans",
    date: "2023-11-10",
    year: 2023,
    tags: ["GAMEDEV", "UNITY", "DESIGN", "University Project"],
    role: "Gameplay Programmer",
    technologies: ["GAMEDEV", "UNITY", "DESIGN", "University Project"],
    shortDescription: "a doodle jump style game with a twist, where the player has to jump on the beans to reach the top of the beanstalk.",
    description: "The game is built in Unity using C# and is a university project.",
    featured: false,
    images: [],
    videos: [],
    links: { build: null, github: null, website: null, video: null }
  },
  {
    id: "proj-004",
    slug: "popup",
    title: "Popup",
    date: "2025-01-26",
    year: 2025,
    tags: ["GAMEDEV", "UNITY", "Game Jam", "WEB"],
    role: "Solo Developer",
    technologies: ["GAMEDEV", "UNITY", "Game Jam", "WEB"],
    shortDescription: "Popup is a rhythm-based game where the player must click the correct arrow in time with the music to achieve the highest score possible.",
    description: " The game features Solo and Multiplayer modes, each with its own unique soundtrack and increasing difficulty. Built using Unity and C#, Popup is designed to be both challenging and fun, testing players' reflexes and timing skills.",
    featured: false,
    images: [popuplogo],
    videos: [popupgameplay],
    links: { build: null, github: null, website: null, video: null, itch: "https://youssefbg1.itch.io/pap-up", linkedin: "https://www.linkedin.com/posts/youssef-ben-ghorbel-883326262_ggj25-gamejam-gamedev-activity-7291216510901977088-VO14?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEB502MBRZ_Yko9lpng6J8YWR7jkyFafRlU" }
  },
  {
    id: "proj-005",
    slug: "city-builder-game",
    title: "City Builder Game",
    date: "2025-03-30",
    year: 2025,
    tags: ["GAMEDEV", "UNITY", "University Project"],
    role: "Building Placement System Programmer",
    technologies: ["GAMEDEV", "UNITY", "University Project"],
    shortDescription: "a game about building and managing a city with out poluting the environment.",
    description: "The game is built in Unity using C# and is a university project. The player must build and manage a city while keeping the environment clean and sustainable. The game features a building placement system that allows the player to place buildings in a grid-based layout, with each building having its own unique effects on the environment.",
    featured: false,
    images: [citybuilderimage],
    videos: [citybuildergameplay],
    links: { build: null, github: null, website: null, video: null, linkedin: "https://www.linkedin.com/posts/youssef-ben-ghorbel-883326262_gamedevelopment-sustainability-citybuilder-activity-7308141542370607104-onPH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEB502MBRZ_Yko9lpng6J8YWR7jkyFafRlU" }
  }
];
