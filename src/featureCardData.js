import growTogetherImg from "./images/illustration-grow-together.svg";
import flowingConvImg from "./images/illustration-flowing-conversation.svg";
import yourUsersImg from "./images/illustration-your-users.svg";

const featureCardData = [
  {
    id: "1",
    title: "Grow Together",
    info: `Generate meaningful discussions with your audience and build a strong, loyal community. 
    Think of the insightful conversations you miss out on with a feedback form.`,
    img: { imgSrc: growTogetherImg },
  },
  {
    id: "2",
    title: "Flowing Conversations",
    info: ` You wouldn't paginate a conversation in real life, so why do it online? Our threads 
    have just-in-time loading for a more natural flow.`,
    img: { imgSrc: flowingConvImg },
  },
  {
    id: "3",
    title: "Your Users",
    info: `It takes no time at all to integrate Huddle with your app's authentication solution. 
    This means, once signed in to your app, your users can start chatting immediately.`,
    img: { imgSrc: yourUsersImg },
  },
];

export default featureCardData;
