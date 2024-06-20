import FormSignInEmail from "./(auth)/components/FormSignInEmail";
import ModalSignIn from "./(auth)/components/SiginModal";
import Book from "./components/Home/Book";
import Video from "./components/Home/Video";

export default function Home() {
    return (
        <>     
            <ModalSignIn>
                <FormSignInEmail />
            </ModalSignIn>
            <Video />
            <Book/>
        </>
    );
}
