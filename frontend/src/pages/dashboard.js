import React from "react";
import { useState, useEffect } from "react";
import { UnitCard } from "../components/UnitCard/UnitCard";
import { CreateTopicModal } from "../modals/CreateTopicModal/CreateTopicModal";

const Dashboard = () => {
  let [units, setUnits] = useState([]);

  useEffect(() => {
    getUnits()
  }, [])

  let getUnits = async () => {
    let response = await fetch('/api/units/')
    let data = await response.json()
    setUnits(data)
  }

  
  return (
    <div className='unit-list'>
      {units.map((unit, key) => {
        return (
        <div key={key} class="col">
          <UnitCard 
            unit_name={unit.unit_name}
            unit_id={key + 1}
            topics={unit.topics}>
          </UnitCard>
        </div>
        );
      })}  
      
    </div>
  );
};

export default Dashboard;
