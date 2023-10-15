import AbsentsList from "./components/AbsentsList";
import AddAbsent from "./components/AddAbsent";
import Layout from "./components/Layout";
import Separator from "./components/Separator";

export default function Absents() {
    return (
        <Layout>
            <div className="flex-1 flex flex-col md:flex-row justify-evenly p-20">
                <AddAbsent />
                <Separator />
                <AbsentsList />
            </div>
        </Layout>
    )
}