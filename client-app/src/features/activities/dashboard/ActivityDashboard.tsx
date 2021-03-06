import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityDetails from "../Details/ActivityDetails";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import ActivityForm from "../form/ActivityForm";

function ActivityDashboard() {
  const { activityStore } = useStore();
  const { selectedActivity, editMode } = activityStore;
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>

      <Grid.Column width="6">
        {selectedActivity && <ActivityDetails />}

        {editMode && <ActivityForm />}
      </Grid.Column>
    </Grid>
  );
}

export default observer(ActivityDashboard);
