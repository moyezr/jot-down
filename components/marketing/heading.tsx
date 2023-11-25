"use client";

import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

type Props = {};

const Heading = (props: Props) => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">JotDown</span>
      </h1>

      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        JotDown is the connected workspace where <br />
        better, faster work happens.
      </h3>
      <Button>
        Enter Jotion
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default Heading;
