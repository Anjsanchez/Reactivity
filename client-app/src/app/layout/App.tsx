import ActivityDashboard from "./../../features/activities/dashboard/ActivityDashboard";
import { useEffect, Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "./LoadingComponent";
import "./styles.css";

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) return <LoadingComponent />;
  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard />
      </Container>
    </Fragment>
  );
}

export default observer(App);
