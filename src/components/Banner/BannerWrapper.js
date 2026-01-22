async function getVideoUrl() {
  try {
    const res = await fetch(
      "https://www.inforbit.in/demo/hotel-elegance-backend/api/banner/video", {
        next: { revalidate: 10 },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch video. Status: ${res.status}`);
    }
    
    const data = await res.json();
    if (data && data.data) {
      return data.data.video;
    }
    throw new Error("Video URL not found in response");
  } catch (error) {
    console.error("Banner Video fetch error:", error);
    return null;
  }
}

import Banner from "./Banner";
export default async function BannerWrapper() {
  const videoUrl = await getVideoUrl();
  return <Banner initialVideo={videoUrl} />;
}
