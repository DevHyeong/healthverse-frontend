import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = ['/dashboard', '/profile', '/settings']

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const token = request.cookies.get('access_token')?.value

    // 로그인 페이지는 항상 접근 허용
    if (pathname.startsWith('/login')) {
        return NextResponse.next()
    }

    // 보호된 라우트인데 토큰이 없으면 redirect
    if (protectedRoutes.some(route => pathname.startsWith(route)) && !token) {
        const loginUrl = new URL('/login', request.url)
        return NextResponse.redirect(loginUrl)
    }

    // 인증된 요청은 계속 진행
    return NextResponse.next()
}