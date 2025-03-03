import React from "react";

import {reverse, templates} from "@reactivated";

import {Layout} from "@client/components/Layout";
import {Tabs} from "@client/components/ui/Tabs";
import {Updates} from "@client/components/investigator/Updates"
import {SubmitAppointments} from "../components/investigator/SubmitAppointments"
import {PatientInfo} from "@client/components/investigator/PatientInfo"


import { HTMLPage } from "@client/components/HTMLPage";

export const Template = () => {
  let data = {
    "Patient Information": <PatientInfo/>,
    "Send Update": <Updates/>,
    "Schedule Appointment": <SubmitAppointments/>
  }
  return (
    <HTMLPage>
        <Tabs data={data}/>
    </HTMLPage>
  );
};
