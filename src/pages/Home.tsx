import Header from "../components/Header.component";
import { useHomeStore } from "./pages.stores";

export default function Home() {
    const { showNavigation, toggleShowNavigation } = useHomeStore();

    return (
        <div>
            <Header toggleShowNavigation={toggleShowNavigation} />
        </div>
    )
}