import React from "react";
import Chart from "../../components/chart/Chart";
import FeatureInfo from "../../components/featureInfo/FeatureInfo";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <FeatureInfo/>
      <Chart/>
    </div>
  )
}

export default Home;
