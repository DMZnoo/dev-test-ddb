// next.config.mjs

export default {
    async headers() {
        return [
            {
                // Apply headers to all routes
                source: "/api/:path*",
                headers: [
                    {
                        key: 'Access-Control-Allow-Credentials',
                        value: 'true',
                    },
                    {
                        key: 'Access-Control-Allow-Origin',
                        // Replace with your domain
                        value: '*',
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value:

                            'X-CSRF-Token, X-Requested-With, Accept, Accept- Version, Content - Length, Content - MD5, Content - Type, Date, X - Api - Version',
                    },
                ],
            },
        ];
    },
};