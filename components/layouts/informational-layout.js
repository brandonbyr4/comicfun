import Header from "../navigation/header"
import Footer from "../navigation/footer"

export default function InformationalLayout (props) {
    return <div>
        <Header />
        {props.content}
        <Footer />
    </div>
}