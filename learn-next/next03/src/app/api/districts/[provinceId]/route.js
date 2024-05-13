import districts from "../../../../data/quan.json";
export const GET = (req, { params: {provinceId} }) => {
	// console.log(params);
	const data = Object.values(districts).filter(({parent_code}) => +parent_code === +provinceId).sort((a,b) => a.code - b.code);
    if(!data){
        return Response.json({
            status:"error",
            message: "Not Found",
            data:[]
        },{
            status:404
        })
    }
	return Response.json({
		status: "Success",
		data,
	});
};
