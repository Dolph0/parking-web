import Articles from "@/components/Articles";
import Discount from "@/components/Discount";
import InfoForm from "@/components/InfoForm/Index";
import Places from "@/components/Places";
import Recharge from "@/components/Recharge";
import VideoArea from "@/components/VideoArea";

export default function Home() {
  return (
    <main>
      <VideoArea />
      <Places />
      <InfoForm />
      <Discount />
      <Articles />
      <Recharge />
    </main>
  );
}
