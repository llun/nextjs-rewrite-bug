import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { host, search, pathname, protocol, port } = req.nextUrl;
  const newUrl = new URL(`${pathname}${search}`, `${protocol}//${host}`);
  return NextResponse.rewrite(newUrl);
}
