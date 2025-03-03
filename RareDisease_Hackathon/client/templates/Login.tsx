import React from "react";

import {reverse, templates} from "@reactivated";

import {Layout} from "@client/components/Layout";


import {Testlogin} from "../components/Testlogin";
import { HTMLPage } from "@client/components/HTMLPage";

export const Template = () => {
  return (
    <HTMLPage>
        <Testlogin />
    </HTMLPage>
  );
};

