import { Link } from "react-router-dom";
import { HiOutlineEmojiSad } from "react-icons/hi";

function Page404() {
    return (
        <div className="page-notfound">
        <main className="notfound">
            <div className="sadface">
                <HiOutlineEmojiSad/>
            </div>
            <h1>404</h1>
            <p>The page you were looking does not exist.</p>
            <Link to="/">Go Back Home</Link>
        </main>
        </div>
    )
}

export default Page404;
