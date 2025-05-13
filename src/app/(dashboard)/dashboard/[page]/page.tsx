import { generatePageKey } from "@/lib/utils";
import PageFiles from "./_components/page-files";
import SubscriptionPage from "./_components/page-subscription";

interface Props {
  params: Promise<{
    page:
      | "subscription"
      | "documents"
      | "images"
      | "videos"
      | "music"
      | "others"
      | "shared";
  }>;
}

const page = async ({ params }: Props) => {
  const pageParam = (await params).page;
  const key = generatePageKey(pageParam);

  if (!key) {
    throw new Error(`Invalid page key generated for page: ${pageParam}`);
  }

  return (
    <>
      <h1 className="capitalize">{pageParam}</h1>
      <br />
      {pageParam === "subscription" ? <SubscriptionPage /> : <PageFiles page={key} />}
    </>
  );
};


export default page;