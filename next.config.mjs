import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    
    images: {
        unoptimized: true,
    }
};
