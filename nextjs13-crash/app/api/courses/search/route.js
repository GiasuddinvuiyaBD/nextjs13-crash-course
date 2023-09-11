import { NextResponse } from "next/server";
import courses from '../data.json'

export async function GET(request)
{
    const {searchParams} = new URL(request.url) // this will any query param that we pass in. 
    const query = searchParams.get('query'); 

    const filterdCourse = courses.filter((course) => 
    {
        return course.title.toLowerCase().includes(query.toLocaleLowerCase())
    })
    return NextResponse.json(filterdCourse);
}