
import { NextResponse } from 'next/server'
import  { NextRequest } from 'next/server'

async function isAdmin(request){
  const auth = request.cookies.get('auth')?.value

  console.log("cookie",auth)

  const headers = { 'Authorization': `Bearer ${auth}` }; 
  const res  = await fetch('http://localhost:4000/api/checkAdmin',{ headers },{ cache: 'no-store' });

  console.log(res.status)
  console.log(auth?.value)
  console.log(auth)

  if(res.status!= 200){
    return NextResponse.redirect(new URL('/', request.url))
  }
  return NextResponse.next()
}

async function isAuth(request){

  const auth = request.cookies.get('auth')?.value

  console.log("cookie",auth)

  const headers = { 'Authorization': `Bearer ${auth}` }; 
  const res  = await fetch('http://localhost:4000/api/checkAuth',{ headers },{ cache: 'no-store' });

  console.log(res.status)
  console.log(auth?.value)
  console.log(auth)

  if(res.status!= 200){
    return NextResponse.redirect(new URL('/', request.url))
  }
  return NextResponse.next()
}

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  console.log(request.nextUrl.pathname)
  if (request.nextUrl.pathname.startsWith('/publish')) {
    return await isAdmin(request)
  }
  if (request.nextUrl.pathname.startsWith('/notes')) {
    return await isAuth(request)
 
  }

  return NextResponse.next()

}

export const config = {

  matcher: '/notes',
  matcher: '/publish',
}
