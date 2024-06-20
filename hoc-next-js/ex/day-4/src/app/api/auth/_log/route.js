export const POST = async (request) => {
    const body = await request.json();
    console.log(body);
    return NextResponse.json({
        status: 401,
        statusText: "Unauthorized",
    });
};