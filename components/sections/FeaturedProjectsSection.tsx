import { FeaturedProjectsClient } from "@/components/sections/FeaturedProjectsClient";
import { getProjects } from "@/lib/projects";

export async function FeaturedProjectsSection() {
  const result = await getProjects();
  console.log('debug',result);

  return (
    <FeaturedProjectsClient
      initialProjects={result.data}
      initialError={result.error}
    />
  );
}
