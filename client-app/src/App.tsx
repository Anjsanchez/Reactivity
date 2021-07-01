import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/Activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <div>
      <Header as="h2" icon="users" content="Reactivities" />
      <List>
        {activities.map((n: any) => (
          <List.Item key={n.id}>{n.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
