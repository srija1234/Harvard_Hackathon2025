import React, {type JSX} from "react";

interface Props {
    children: React.ReactNode;
}

export const HTMLPage = (props: Props) => (
    <html>
        <head>
            <title>Rare Disease Patient Portal</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
        </head>
        <body>
            {props.children}
        </body>
    </html>
)