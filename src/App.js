import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import GenerateActivity from "./components/GenerateActivity";
import { BottomNavigation } from "reactjs-bottom-navigation";
import happyIcon from "./img/happy.svg";
import boredIcon from "./img/bored.svg";
import collectSelectIcon from "./img/collect_select.svg";
import collectUnSelectIcon from "./img/collect_unselect.svg";
import bg from "./img/bg2.png";
import GlobalToast from "./components/GlobalToast";
import CollectList from "./components/CollectList";

function App() {
  const [itemId, setItemId] = useState(0);
  const [bottomNavHeight, setBottomNavHeight] = useState(0);
  const navItemRef = useRef(null);
  const bottomNavItems = [
    {
      title: "Get Activity",
      onClick: ({ id }) => setItemId(id),
      icon: <img style={styles.icon} src={boredIcon} alt="" />,
      activeIcon: <img style={styles.icon} src={happyIcon} alt="" />,
    },
    {
      title: "Collect",
      onClick: ({ id }) => setItemId(id),
      icon: <img style={styles.icon} src={collectUnSelectIcon} alt="" />,
      activeIcon: <img style={styles.icon} src={collectSelectIcon} alt="" />,
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
          <p className="ToolbarTitle">Bored</p>
        </div>

        <div className="MainContent">
          {itemId == 0 ? <GenerateActivity /> : <CollectList />}
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
            activeBgColor="#4d6dde"
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
