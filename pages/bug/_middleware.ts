import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { search, pathname, protocol, port } = req.nextUrl;
  const newUrl = new URL(
    `${pathname}${search}`,
    `${protocol}//127.0.0.1:${port}`
  );
  return NextResponse.rewrite(newUrl);
}
