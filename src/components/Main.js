import { Link } from "react-router-dom";
import Memebership from "./Memebership";
import DetailBar from "./DetailBar";
import MovieList from "./MovieList";
import Whyjoin from "./Whyjoin";
import FAQ from "./FAQ";

const Main = () => {
    return (
        <main id="main">
            <div className="banner">
                <h1>영화, 시리즈 등을 무제한으로</h1>
                <p>
                    7,000원으로 시작하세요. 멤버쉽은 언제든지 해지 가능합니다.
                </p>
                <Memebership />
            </div>
            <div className="curve-wrap">
                <div className="curve-circle"></div>
                <div className="gradient-line"></div>
            </div>
            <section>
                <DetailBar />
                <MovieList/>
                <Whyjoin/>
                <FAQ/>
            </section>
        </main>
    );
};

export default Main;
