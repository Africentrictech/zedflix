module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.wasm$/,
      type: "javascript/auto",
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/wasm",
          outputPath: "static/wasm",
        },
      },
    });

    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push("brotli-dec-wasm");
    }

    return config;
  },
}
