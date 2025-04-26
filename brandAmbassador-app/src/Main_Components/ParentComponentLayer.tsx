import { PageContext, useContextAndErrorIfNull } from "../Contexts/Context";
import Layout from "./Layout";
import ParentComponent from "./ParentComponent";

export function ParentComponentLayer() {
  return (
    <Layout>
      <ParentComponent />
    </Layout>
  );
}

//Use context hook
