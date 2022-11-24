import { Card as CardManteen, CardSectionProps } from "@mantine/core";
import { motion } from "framer-motion";
import React from "react";

interface IMotionCardSection extends CardSectionProps {
  children: React.ReactNode;
}

const cardproto = React.forwardRef(
  (props: IMotionCardSection, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { children, ...sectionProps } = props;
    return (
      <CardManteen.Section ref={ref} {...sectionProps}>
        {props.children}
      </CardManteen.Section>
    );
  }
);

export const MotionCardSection = motion(cardproto);
