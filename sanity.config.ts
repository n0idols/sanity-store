import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemaTypes from "./sanity/schemas";

const config = defineConfig({
  projectId: "pav692pa",
  dataset: "production",
  title: "audiostore-sanity",
  apiVersion: "2023-04-11",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});

export default config;
