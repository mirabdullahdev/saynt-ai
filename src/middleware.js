import { NextResponse } from 'next/server'
import { getApi } from './frontend/helpers';
 
export function middleware(request) {
  const response = NextResponse.next();
  response.headers.set('X-Current-URL', request.url);
  // checkAdminAuth(request);
  // updateAdminToken(request);
  return response;
}

// async function checkAdminAuth(request) {
  // if(request.url.includes("admin")) {
    // let res = await getApi("/api/auth/check-login");
    // console.log(res)
  // }
// }

async function updateAdminToken(request) {
  if(request.url.includes("api")) {
    await getApi("/api/auth/update-admin-token");
  }
}

export const config = {
    matcher: [
      '/',
      '/((?!_next|static|favicon.ico).*)',
    ],
};  