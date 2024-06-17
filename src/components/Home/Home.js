
import styles from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";
function Home() {

    return (
        <div >
            <NavBar />
            <ToDoForm />
            <ToDoList />
        </div>
    )
}

export default Home;