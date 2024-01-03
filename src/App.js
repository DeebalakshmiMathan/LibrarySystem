import { Route, Routes } from "react-router-dom";
import BookList from "./component/BookList";
import MemberList from "./component/MemberList";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div className=" h-screen w-full">
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="h-[10%] w-full bg-black sticky top-0">
          <Navbar />
        </div>
        <div className="h-[90%] w-full overflow-y-auto ">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/member" element={<MemberList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
