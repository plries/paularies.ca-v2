import { Project } from "./components/Project";
import { workMetadata } from "./workMetadata";
import { WorkMetadataPropTypes } from "./types";

export async function generateMetadata({ params }: WorkMetadataPropTypes) {
  return workMetadata({ params });
}

export default function ProjectPage() {
  return <Project />;
}
