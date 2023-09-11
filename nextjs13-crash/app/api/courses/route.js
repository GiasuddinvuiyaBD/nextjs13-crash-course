import { NextResponse } from "next/server";
import uuid4 from "uuid4";
import courses from '../courses/data.json';

export async function GET(Response)
{
    return NextResponse.json(courses);
}


export async function POST(request)
{
    const {title, description,link , level} = await request.json();
    const newCourse = {
        id : uuid4(),
        title,
        description,
        link,
        level
    }

    courses.push(newCourse)
    return NextResponse.json(courses);
}
