import { NextResponse } from "next/server";


export default function middleware(req) {
    let verify = req.cookies.get("Logedin");
    let url = req.url;
    if(!verify && url.includes("/categories") && url.includes("/products")&& url.includes("/productList")&& 
    url.includes("/variants") && url.includes("/userDetails")){
        return NextResponse.redirect("/");
    }
}