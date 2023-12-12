import SingleProject from "@/components/SingleProject";
import { fetchSingleProject } from "@/utils/actions";

const SingleProjectPage = async ({ params }) => {
  const data = await fetchSingleProject(params.projectId);
  console.log(data);

  return <SingleProject project={data} />;
};

export default SingleProjectPage;
