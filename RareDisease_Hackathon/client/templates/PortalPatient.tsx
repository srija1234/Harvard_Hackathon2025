import React from "react";

// import { PageProps } from "./types";
//import {Form} from "@reactivated/forms";

import {Navigation} from "@client/components/patient/Navigation";

import { HTMLPage } from "@client/components/HTMLPage";
import {Tabs} from "@client/components/ui/Tabs"
import {Trial} from "@client/components/patient/Trial"
import {DailyCheck} from "@client/components/patient/DailyCheck"
import {Analytics} from "@client/components/patient/Analytics"
import {Appointments} from "@client/components/patient/Appointments"
import {Updates} from "@client/components/patient/Updates"

export const Template = () => {
  return (
    <HTMLPage>
        <Navigation/>
        <Tabs data={({
          "Daily Check-in": <DailyCheck/>,
          "Clinical Trials": <Trial/>,
          "Appointments": <Appointments/>,
          "Analytics": <Analytics/>,
          "Updates": <Updates/>
        })}/>
    </HTMLPage>
  );
};

