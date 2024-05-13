import provinces from "../../../data/tinh.json";
export const GET = () => {
    const data = Object.values(provinces);
    data.sort((a,b) => a.code - b.code);
	return Response.json({
		status: "success",
		data: Object.values(data),
	});
};