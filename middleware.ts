import { NextRequest, NextResponse } from "next/server";

const LANGUAGES = ["/es", "/en"];

export default async function middleware(request: NextRequest) {
    const defaultLocale = request.headers.get("x-default-locale") ?? "en";

    const { pathname } = request.nextUrl;

    if (LANGUAGES.some((langPath) => pathname.includes(langPath))) {
        return;
    } else {
        if (defaultLocale === "es")
            return NextResponse.redirect(new URL(`/es${pathname}`, request.url));
        return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
    }
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|icon.png|temp|assets).*)",
    ],
};