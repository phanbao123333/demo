import "./App.css";
import { data } from "./data";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState("");

  return (
    <div className="app-container">
      <h1>Danh sách món ăn</h1>
      <input type="text" id="searchInput" placeholder="Nhập từ khóa..." />
      <div className="food-list">
        {data.map((item) => (
          <div key={item.id} className="food-item">
            <img src={item.Image} alt={item.name} className="food-image" />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>

      {/* Bảng đánh giá */}
      <div className="feedback-form">
        <h2>Bảng đánh giá và nhận xét của khách hàng</h2>

        <div className="rating-item">
          <label>1. Bạn thấy hài lòng về dịch vụ của bên mình?</label>
          <div className="stars">
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>
        </div>

        <div className="rating-item">
          <label>2. Bạn thấy hài lòng với sản phẩm chất lượng?</label>
          <div className="stars">
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>
        </div>

        <div className="rating-item">
          <label>3. Nhận xét và đánh giá để bên mình phát triển hơn?</label>
          <textarea
            id="feedback"
            placeholder="Tối đa là 1500 từ"
            maxLength="1500"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>

        <div className="button-group">
          <button type="button">Đánh giá</button>
          <button type="button">Hủy</button>
        </div>
      </div>
    </div>
  );
}

export default App;
