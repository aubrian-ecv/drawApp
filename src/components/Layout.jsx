import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <section className="h-full min-h-screen md:h-screen bg-content flex flex-col ">
            <Header />
            {children}
            <Footer />
        </section>
    )
}