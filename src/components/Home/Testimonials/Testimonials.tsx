import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import QuoteCard from "./QuoteCard";
import Typography from "../../Typography";
import Stack from "../../Stack";
import styles from "./QuoteCard.module.css";

const Testimonials = () => {
  return (
    <Stack align="flex-start" sx={{ width: "100%" }}>
      <Typography
        sx={{
          marginLeft: "100px",
          color: "#321841",
          fontFamily: "PP Telegraf",
          fontSize: "64px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
        }}
      >
        Testimonials
      </Typography>
      <Carousel width={"100vw"}>
        <div>
          <Stack
            direction="row"
            sx={{ width: "100%", padding: "100px" }}
            justify="space-between"
            gap="8px"
          >
            <QuoteCard />
            <QuoteCard />
          </Stack>
        </div>
        <div>
          <Stack
            direction="row"
            sx={{ width: "100%", padding: "100px" }}
            justify="space-between"
            gap="8px"
          >
            <QuoteCard />
            <QuoteCard />
          </Stack>
        </div>
      </Carousel>
    </Stack>
  );
};

export default Testimonials;
