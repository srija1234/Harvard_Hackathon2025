import React, {useState} from "react";

import {reverse, templates, Form} from "@reactivated";

import {Layout} from "@client/components/Layout";
import {Testlogin} from "@client/components/Testlogin";
import { HTMLPage } from "@client/components/HTMLPage";
import { RegisterPatient } from "../register/RegisterPatient"
import { RegisterInvestigator } from "../register/RegisterInvestigator"
import { Box, Tabs, Tab, Container } from '@mui/material';
import { TabPanel, TabContext, TabList } from '@mui/lab';

export const Template = () => {
    const [value, setValue] = useState("1");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    return (
        <HTMLPage>
            <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            {/* <Box component="section"> Register</Box>
            <Box
                sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                    },
                }}
            /> */}
            
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Patient" value="1" />
                <Tab label="Investigator" value="2" />
                </TabList>
            </Box>
            <TabPanel value="1">
                <RegisterPatient/>
            </TabPanel>
            <TabPanel value="2">
                <RegisterInvestigator/>
            </TabPanel>
            </TabContext>
        </HTMLPage>
      );
}