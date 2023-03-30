import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/bookCard";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { BookingSteps } from "./bookingSteps";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-screen
    h-screen
    pl-1
    pr-1
    ml-2
    mr-2
    items-center
  `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="8em" />
      <BookingSteps />
    </PageContainer>
  )
}