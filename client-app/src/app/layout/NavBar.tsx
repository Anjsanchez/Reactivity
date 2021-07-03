import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

interface Props {}

function NavBar() {
  const { activityStore } = useStore();

  async function handleOpenForm() {
    activityStore.closeForm();
    await sleep(0);
    activityStore.openForm();
  }

  const sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  return (
    <Menu inverted fixed="top" className="navbar--header">
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button positive content="Create Activity" onClick={handleOpenForm} />
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default observer(NavBar);
