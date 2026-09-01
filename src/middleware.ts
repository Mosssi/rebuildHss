import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";


export default createMiddleware({
  locales: ["en", "sv"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};