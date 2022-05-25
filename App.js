import "./App.css";
import Home from "./components/HomePage/Home";
import Main from "./components/MainPage/Main";
import Login from "./components/LoginPage/Login";
import Book1 from "./components/BOOK1/Book1";
import B1Q1 from "./components/BOOK1/B1Q1";
import B1Q2 from "./components/BOOK1/B1Q2";
import B1Q3 from "./components/BOOK1/B1Q3";
import B1Q4 from "./components/BOOK1/B1Q4";
import B1Q5 from "./components/BOOK1/B1Q5";
import B1Q6 from "./components/BOOK1/B1Q6";
import B1Q7 from "./components/BOOK1/B1Q7";
import B1Q8 from "./components/BOOK1/B1Q8";
import B1Q9 from "./components/BOOK1/B1Q9";
import B1Q10 from "./components/BOOK1/B1Q10";
import B1Q11 from "./components/BOOK1/B1Q11";
import B1Q12 from "./components/BOOK1/B1Q12";
import B1Q13 from "./components/BOOK1/B1Q13";
import Save from "./components/BOOK1/Save";
import End from "./components/BOOK1/End";
import SignUp from "./components/SignUpPage/SignUp";
import MyPage from "./components/MyPage/MyPage";
import B1Q1_R from "./components/BOOK1/B1Q1_R";
import B1Q1_L from "./components/BOOK1/B1Q1_L";
import B1Q2_R from "./components/BOOK1/B1Q2_R";
import B1Q2_L from "./components/BOOK1/B1Q2_L";
import B1Q3_R from "./components/BOOK1/B1Q3_R";
import B1Q3_L from "./components/BOOK1/B1Q3_L";
import B1Q4_R from "./components/BOOK1/B1Q4_R";
import B1Q4_L from "./components/BOOK1/B1Q4_L";
import B1Q5_A from "./components/BOOK1/B1Q5_A";
import B1Q5_H from "./components/BOOK1/B1Q5_H";
import B1Q5_S from "./components/BOOK1/B1Q5_S";
import B1Q6_R from "./components/BOOK1/B1Q6_R";
import B1Q6_L from "./components/BOOK1/B1Q6_L";
import B1Q7_R from "./components/BOOK1/B1Q7_R";
import B1Q7_L from "./components/BOOK1/B1Q7_L";
import B1Q8_R from "./components/BOOK1/B1Q8_R";
import B1Q8_L from "./components/BOOK1/B1Q8_L";
import B1Q9_R from "./components/BOOK1/B1Q9_R";
import B1Q9_L from "./components/BOOK1/B1Q9_L";
import B1Q10_R from "./components/BOOK1/B1Q10_R";
import B1Q10_L from "./components/BOOK1/B1Q10_L";
import B1Q11_R from "./components/BOOK1/B1Q11_R";
import B1Q11_L from "./components/BOOK1/B1Q11_L";
import B1Q12_R from "./components/BOOK1/B1Q12_R";
import B1Q12_L from "./components/BOOK1/B1Q12_L";
import B1Q13_A from "./components/BOOK1/B1Q13_A";
import B1Q13_H from "./components/BOOK1/B1Q13_H";
import B1Q13_S from "./components/BOOK1/B1Q13_S";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Book1" element={<Book1 />} />
          <Route path="/B1Q1" element={<B1Q1 />} />
          <Route path="/B1Q2" element={<B1Q2 />} />
          <Route path="/B1Q3" element={<B1Q3 />} />
          <Route path="/B1Q4" element={<B1Q4 />} />
          <Route path="/B1Q5" element={<B1Q5 />} />
          <Route path="/B1Q6" element={<B1Q6 />} />
          <Route path="/B1Q7" element={<B1Q7 />} />
          <Route path="/B1Q8" element={<B1Q8 />} />
          <Route path="/B1Q9" element={<B1Q9 />} />
          <Route path="/B1Q10" element={<B1Q10 />} />
          <Route path="/B1Q11" element={<B1Q11 />} />
          <Route path="/B1Q12" element={<B1Q12 />} />
          <Route path="/save" element={<Save />} />
          <Route path="/end" element={<End />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/B1Q1_R" element={<B1Q1_R />} />
          <Route path="/B1Q1_L" element={<B1Q1_L />} />
          <Route path="/B1Q2_R" element={<B1Q2_R />} />
          <Route path="/B1Q2_L" element={<B1Q2_L />} />
          <Route path="/B1Q3_R" element={<B1Q3_R />} />
          <Route path="/B1Q3_L" element={<B1Q3_L />} />
          <Route path="/B1Q4_R" element={<B1Q4_R />} />
          <Route path="/B1Q4_L" element={<B1Q4_L />} />
          <Route path="/B1Q5_A" element={<B1Q5_A />} />
          <Route path="/B1Q5_H" element={<B1Q5_H />} />
          <Route path="/B1Q5_S" element={<B1Q5_S />} />
          <Route path="/B1Q6_R" element={<B1Q6_R />} />
          <Route path="/B1Q6_L" element={<B1Q6_L />} />
          <Route path="/B1Q7_R" element={<B1Q7_R />} />
          <Route path="/B1Q7_L" element={<B1Q7_L />} />
          <Route path="/B1Q8_R" element={<B1Q8_R />} />
          <Route path="/B1Q8_L" element={<B1Q8_L />} />
          <Route path="/B1Q9_R" element={<B1Q9_R />} />
          <Route path="/B1Q9_L" element={<B1Q9_L />} />
          <Route path="/B1Q10_R" element={<B1Q10_R />} />
          <Route path="/B1Q10_L" element={<B1Q10_L />} />
          <Route path="/B1Q11_R" element={<B1Q11_R />} />
          <Route path="/B1Q11_L" element={<B1Q11_L />} />
          <Route path="/B1Q12_R" element={<B1Q12_R />} />
          <Route path="/B1Q12_L" element={<B1Q12_L />} />
          <Route path="/B1Q13" element={<B1Q13 />} />
          <Route path="/B1Q13_A" element={<B1Q13_A />} />
          <Route path="/B1Q13_H" element={<B1Q13_H />} />
          <Route path="/B1Q13_S" element={<B1Q13_S />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
