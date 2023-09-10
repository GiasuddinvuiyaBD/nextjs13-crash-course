import { NextResponse } from "next/server";
import courses from '../courses/data.json';

export async function GET(Response)
{
    return NextResponse.json(courses);
}