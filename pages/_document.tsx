import React from "react";
import Document, { Head, Main, NextScript, DocumentContext } from "next/document";

export default class CustomDocument extends Document<{
    spriteContent: string;
}> {
    public static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps
        };
    }

    public render() {
        return (
            <html>
                <Head>{/* your head if needed */}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
