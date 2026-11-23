import { useRef } from "react";
import "./App.css";

function App() {
  const menuRef = useRef(null);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("open");
  };

  return (
    <>
      <header>
        <div className="logo">MyShop</div>
        <button className="menu-btn" onClick={toggleMenu}>
          &#9776;
        </button>
        <nav ref={menuRef} className="menu">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <h1>Welcome to MyShop</h1>
        <p>Resize the browser window to see the menu change.</p>
      </main>
    </>
  );
}

export default App;