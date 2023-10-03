import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <section className="w-screen h-screen bg-content flex flex-col ">
            <Header />
            {children}
            <Footer />
        </section>
    )
}