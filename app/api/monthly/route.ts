import { NextResponse } from "next/server";


export async function GET() {

    return NextResponse.json({ status: 200, message: "CRON JOBS WORKING ON 1st OF EVERY MONTH" })
}