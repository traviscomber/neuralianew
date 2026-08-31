import { NextResponse } from 'next/server'

export function GET(request: Request) {
  return NextResponse.redirect(new URL('/recognition-section04-platform-v5.webp', request.url), 307)
}
