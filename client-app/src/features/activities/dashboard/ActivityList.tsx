import { SyntheticEvent } from "react";
import { useState } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

interface Props {}
function ActivityList({}: Props) {
  const { activityStore } = useStore();
  const {
    activities,
    setSubmitting,
    selectActivity,
    closeForm,
    deleteActivity,
    activitiesBydate,
  } = activityStore;

  const [target, setTarget] = useState("");

  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  function handleViewAction(id: string) {
    closeForm();
    selectActivity(id);
  }

  return (
    <Segment>
      <Item.Group divided>
        {activitiesBydate.map((n) => (
          <Item key={n.id}>
            <Item.Content>
              <Item.Header as="a">{n.title}</Item.Header>
              <Item.Meta>{n.date}</Item.Meta>
              <Item.Description>
                <div>{n.description}</div>
                <div>{n.city}</div>
              </Item.Description>
              <Item.Extra>
                <Button
                  content="View"
                  onClick={() => handleViewAction(n.id)}
                  floated="right"
                  color="blue"
                  id={n.id}
                />
                <Button
                  content="Delete"
                  name={n.id}
                  onClick={(e) => handleActivityDelete(e, n.id)}
                  floated="right"
                  color="red"
                  loading={setSubmitting(true) && target === n.id}
                  id={n.id}
                />
                <Label basic content={n.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
export default observer(ActivityList);
