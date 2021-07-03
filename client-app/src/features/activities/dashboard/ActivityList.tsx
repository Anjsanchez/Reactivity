import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "./../../../app/Models/activity";

interface Props {
  activities: Activity[];
}

export default function ActivityList({ activities }: Props) {
  return (
    <Segment>
      <Item.Group divided>
        {activities.map((n) => (
          <Item key={n.id}>
            <Item.Content>
              <Item.Header as="a">{n.title}</Item.Header>
              <Item.Meta>{n.date}</Item.Meta>
              <Item.Description>
                <div>{n.description}</div>
                <div>{n.city}</div>
              </Item.Description>
              <Item.Extra>
                <Button floated="right" content="View" color="blue" />
                <Label basic content={n.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
