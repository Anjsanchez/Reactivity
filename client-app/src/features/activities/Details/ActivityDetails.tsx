import { Card, Image, Button } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

interface Props {}

function ActivityDetails({}: Props) {
  const { activityStore } = useStore();
  const { selectedActivity, openForm, cancelSelectedActivity, closeForm } =
    activityStore;

  if (!selectedActivity) return <div></div>;

  function handleCancelActivity() {
    closeForm();
    cancelSelectedActivity();
  }
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${selectedActivity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{selectedActivity.title}</Card.Header>
        <Card.Meta>
          <span>{selectedActivity.date}</span>
        </Card.Meta>
        <Card.Description>{selectedActivity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            content="Edit"
            onClick={() => openForm(selectedActivity.id)}
            name={selectedActivity.id}
            basic
            color="blue"
          />
          <Button
            content="Cancel"
            onClick={handleCancelActivity}
            basic
            color="grey"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}

export default observer(ActivityDetails);
