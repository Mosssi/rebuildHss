import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
    messages: (await import(`../src/message/${locale}.json`)).default,
}));

