import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBox from "./components/SearchBox";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container>
      <SearchBox />
      <hr />
      <CommentForm />
      <CommentList />
    </Container>
  );
}

export default App;
