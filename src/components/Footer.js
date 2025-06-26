
const footerMenu = [
    "자주 묻는 질문",
    "고객 센터",
    "계정",
    "미디어센터",
    "투자 정보(IR)",
    "입사 정보",
    "넷플릭스 지원 디바이스",
    "이용약관",
    "개인정보 처리방침",
    "쿠키 설정",
    "회사 정보",
    "문의하기",
    "속도 테스틑",
    "법적 고지",
    "오직 넷플릭스에서"
];
const Footer = () => {
    return (
        <footer className="footer">
            <p>질문이 있으신가요?</p>
            <ul className="netflix">
                {
                    footerMenu.map((item,idx)=>{
                        return (
                            <li key={idx}><a href="#">{item}</a></li>
                        )
                    })
                }
            </ul>
            <ul className="myproject">
                <li>이 사이트는 Netflix 클론입니다.</li>
                <li>상업목적이 아닙니다.</li>
                <li>Made by 박준형</li>
                <li>GitHub : <a href="https://github.com/junhyoung2/netflix" target="_blank" rel="noopener noreferrer">프로젝트 보러가기</a></li>


                <li>기술 스택 : React, Scss, REST API, 반응형, Flex Layout, Grid Layout</li>
            </ul>
        </footer>
    );
};

export default Footer;