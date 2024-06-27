import { Box, Button, Grid, Typography } from "@mui/material";
import { MainTypography } from "@/components";
import { logo, star, arrowLeft } from "@/assets";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sm={2}>
          <Grid
            container
            sx={{
              borderRight: "2px #EFC7B0 solid",
            }}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sm={6}>
            <Grid item sm={2}>
              <Image src={logo} alt="logo" />
            </Grid>
            <Grid item sm={10}>
              <MainTypography variant="h6" textAlign="center" color="#EFC7B0">
                Donquix
              </MainTypography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            sm={6}>
            <Grid item>
              <Image src={star} alt="star" width={20} height={20} />
            </Grid>
            <Grid item>
              <Image src={star} alt="star" width={20} height={20} />
            </Grid>
            <Grid item>
              <Image src={star} alt="star" width={20} height={20} />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sm={4}>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            sm={4}>
            <Grid item>
              <Image src={star} alt="star" width={20} height={20} />
            </Grid>
            <Grid item>
              <Image src={star} alt="star" width={20} height={20} />
            </Grid>
            <Grid item>
              <Image src={star} alt="star" width={20} height={20} />
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              borderLeft: "2px #EFC7B0 solid",
            }}
            sm={8}>
            <MainTypography variant="h6" textAlign="center" color="#EFC7B0">
              uncommon among uncommon
            </MainTypography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" alignContent="center">
        <MainTypography variant="h1" color="#EFC7B0">
          A visionary creative studio
        </MainTypography>
        <Typography variant="h4" color="#EFC7B0">
          that brings brands, stories, and experiences to life through art,
          design, and animation.
        </Typography>
      </Grid>

      <Grid container justifyContent="space-evenly" alignContent="center">
        <Grid item sm={5}>
          <MainTypography variant="h1" color="#EFC7B0">
            We take ownership. Period.
          </MainTypography>
        </Grid>
        <Grid container sm={5}>
          <Grid item sm={1}>
            <Image src={star} alt="star" width={20} height={20} />
          </Grid>
          <Grid item sm={11}>
            <Typography variant="h5" color="#EFC7B0">
              Your brand’s story is unique, and understanding that story is our
              first step
            </Typography>
          </Grid>
          <Grid item sm={1}>
            <Image src={star} alt="star" width={20} height={20} />
          </Grid>
          <Grid item sm={11}>
            <Typography variant="h5" color="#EFC7B0">
              We are process oriented and quality obsessed people.
            </Typography>
          </Grid>
          <Grid item sm={1}>
            <Image src={star} alt="star" width={20} height={20} />
          </Grid>
          <Grid item sm={11}>
            <Typography variant="h5" color="#EFC7B0">
              Nothing lifts our spirit more than creating impactful work so we
              strive to be more than mere numbers. We give importance to your
              brand, your product, your target audience, and your competition.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignContent="center">
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignContent="center"
          sm={5}>
          <Grid item sm={2}>
            <Typography variant="h2" textAlign="center">
              Highlighted
            </Typography>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignContent="center"
            sm={2}>
            <Grid item>
              <Typography variant="h4" textAlign="left">
                Craft
              </Typography>
            </Grid>
            <Grid
              container
              direction="column"
              justifyContent="space-evenly"
              alignContent="flex-start">
              <Typography>Creative Direction</Typography>
              <Typography>Art Direction</Typography>
              <Typography>Motion Design</Typography>
              <Typography>Animation</Typography>
              <Typography>Brand Design</Typography>
              <Typography>Design Systems</Typography>
              <Typography>Video Production</Typography>
              <Typography>Ad films</Typography>
              <Typography>Web Design & Development</Typography>
              <Typography>Digital Product Design</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignContent="center"
          sm={4}>
          <Grid item sm={2}>
            <Typography variant="h2" textAlign="center">
              Capabilities
            </Typography>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignContent="center"
            sm={5}>
            <Grid item>
              <Typography variant="h4" textAlign="left">
                Strategy
              </Typography>
            </Grid>
            <Grid
              container
              direction="column"
              justifyContent="space-evenly"
              alignContent="flex-start">
              <Typography>Target analysis & segmentation</Typography>
              <Typography>Brand strategy & positioning</Typography>
              <Typography>Social media & content strategy</Typography>
              <Typography>Market analysis</Typography>
              <Typography>Brand proposition</Typography>
              <Typography>Influencer marketing</Typography>
              <Typography>Social media marketing</Typography>
              <Typography>Media partnership</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center">
        <Grid
          container
          sx={{ border: "1px solid #EFC7B0", p: 5 }}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sm={9}>
          <Grid item sm={10}>
            <MainTypography variant="h1" textAlign="center" color="#EFC7B0">
              Start a Project
            </MainTypography>
          </Grid>
          <Grid item sm={2}>
            <Image src={arrowLeft} alt="star" width={150} height={150} />
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h3" textAlign="center" color="#EFC7B0">
            That{"'"}s a wrap! Hope the button{"'"}s big enough for you to
            smash!
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
