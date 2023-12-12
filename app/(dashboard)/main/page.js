import Main from "@/components/Main";
import { fetchProjects } from "@/utils/actions";

// import {
//   dehydrate,
//   HydrationBoundary,
//   QueryClient,
// } from "@tanstack/react-query";

const MainPage = async () => { 
  const data=await fetchProjects()
  // const queryClient = new QueryClient();
  // await queryClient.prefetchQuery({
  //   queryKey: ["project"],
  //   queryFn: () => fetchProjects(),
  // });
  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
      <Main data={data} />
    // </HydrationBoundary>
  );
};

export default MainPage;
