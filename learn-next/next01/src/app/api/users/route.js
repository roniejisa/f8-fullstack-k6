// FILE này chứa các hàm tương tự với HTP METHOD:

/*
GET
POST
PUT
PATCH
DELETE


*/

//Endpoint: GET /users

export const GET = (request) => {
	return Response.json({
		status: "success",
		data: [
			{
				id: 1,
				name: "User 1",
			},
			{
				id: 2,
				name: "User 2",
			},
		],
	},{
        status:404
    });
};
