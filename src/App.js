import React, { useState } from "react";
import "./App.css";
import GenerateActivity from "./components/GenerateActivity";
import { BottomNavigation } from "reactjs-bottom-navigation";
import happyIcon from "./img/happy.svg";
import boredIcon from "./img/bored.svg";
import collectSelectIcon from "./img/collect_select.svg";
import collectUnSelectIcon from "./img/collect_unselect.svg";

function App() {
  const [itemId, setItemId] = useState(0);
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

  return (
    <div className="App">
      <header className="MainContainer">
        <div className="Toolbar">
          <p className="ToolbarTitle">Bored</p>
        </div>

        <div className="MainContent">
          {itemId == 0 ? <GenerateActivity /> : null}
          <BottomNavigation
            className="BottomNavigatorBar"
            items={bottomNavItems}
            selected={0}
            onItemClick={(item) => console.log(item)}
            activeBgColor="#4d6dde"
            activeTextColor="white"
          />
        </div>
      </header>
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
