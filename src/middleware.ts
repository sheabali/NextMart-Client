import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from './services/AuthService';

const authRoutes = ['/login', '/register'];

const roleBasePrivateRoutes = {
  user: [/^\/user/],
  admin: [/^\/admin/],
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const userInfo = await getCurrentUser();

  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      {
        return NextResponse.next();
      }
    } else {
      return NextResponse.redirect(
        new URL(
          `http://localhost:3000/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }
};

export const config = {
  matcher: ['/login', '/create-shop'],
};
