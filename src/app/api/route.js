export async function GET(request) {
    return Response.json({message:'teste'})
}

export async function POST(request) {
    const data = await request.json()
    return Response.json(data)
}