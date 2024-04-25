import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { BottomNavigation } from "reactjs-bottom-navigation";
import genderIcon from "./img/gender.svg";
import nationalitySelectIcon from "./img/nationality_select.svg";
import nationalityUnSelectIcon from "./img/nationality_unselect.svg";
import bg from "./img/bg2.png";
import GlobalToast from "./components/GlobalToast";
import GenderizePage from "./components/GenderizePage";
import NationalityPage from "./components/NationalityPage";

function App() {
  const [itemId, setItemId] = useState(0);
  const [bottomNavHeight, setBottomNavHeight] = useState(0);
  const navItemRef = useRef(null);
  const bottomNavItems = [
    {
      title: "Genderize",
      onClick: ({ id }) => setItemId(id),
      icon: <img style={styles.icon} src={genderIcon} alt="" />,
      activeIcon: <img style={styles.icon} src={genderIcon} alt="" />,
    },
    {
      title: "Nationality",
      onClick: ({ id }) => setItemId(id),
      icon: <img style={styles.icon} src={nationalityUnSelectIcon} alt="" />,
      activeIcon: (
        <img style={styles.icon} src={nationalitySelectIcon} alt="" />
      ),
    },
  ];

  useEffect(() => {
    const navItem = document.querySelector(".bottom-nav");
    if (navItem) {
      const navItemHeight = navItem.offsetHeight;
      setBottomNavHeight(navItemHeight);
    }
  }, []);

  return (
    <div className="App">
      <img src={bg} className="App-Background" />
      <div className="MainContainer">
        <div className="Toolbar">
          <p className="ToolbarTitle">Predict By Name</p>
        </div>

        <div className="MainContent">
          {itemId == 0 ? <GenderizePage /> : <NationalityPage />}
        </div>
        <div
          className="BottomNavigatorBar"
          id="bottomNavigation"
          style={{ height: bottomNavHeight }}
        >
          <BottomNavigation
            items={bottomNavItems}
            selected={0}
            onItemClick={(item) => console.log(item)}
            activeBgColor={itemId === 0 ? "#e78959" : "#46bf6a"}
            activeTextColor="white"
          />
        </div>
        <GlobalToast />
      </div>
    </div>
  );
}

export default App;

const styles = {
  icon: {
    width: "35px",
    height: "35px",
  },
  bottomNavigation: {
    width: "100%",
    height: "50px",
  },
};
