import LatestNews from "@/components/ui/latestNews/LatestNews";
import SiderBar from "@/components/ui/latestNews/sideBar/SiderBar";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
<>
<Grid  container spacing={2}>
<Grid item xs={8}>
 <LatestNews></LatestNews>
</Grid>
<Grid item xs={4}> 
<SiderBar></SiderBar>
</Grid>

</Grid>

</>
  );
}
