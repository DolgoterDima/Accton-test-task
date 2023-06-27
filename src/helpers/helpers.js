export const isProduction = process.env.NODE_ENV === "production";
export const prodUrlPrefix = isProduction ? "/Accton-test-task" : "/";
