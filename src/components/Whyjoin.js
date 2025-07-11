import { FaTv, FaArrowCircleDown } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { TiMessages } from "react-icons/ti";

const reasons = [
  {
    id: 1,
    title: "TV로 즐기세요",
    desc: "스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.",
    icon: <FaTv />,
  },
  {
    id: 2,
    title: "즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요",
    desc: "간편하게 저장하고 빈틈없이 즐겨보세요.",
    icon: <FaArrowCircleDown />,
  },
  {
    id: 3,
    title: "다양한 디바이스로 시청하세요",
    desc: "각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요.",
    icon: <MdDevices />,
  },
  {
    id: 4,
    title: "어린이 전용 프로필을 만들어 보세요",
    desc: "자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.",
    icon: <TiMessages />,
  },
];

const Whyjoin = () => {
  return (
    <div className="why-join">
      <h2>가입해야 하는 또 다른 이유</h2>
      <ul>
        {reasons.map(({ id, title, desc, icon }) => (
          <li key={id}>
            <div className="icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Whyjoin;
