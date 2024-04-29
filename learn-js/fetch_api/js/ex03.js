//Cors

// Chính sách của trình duyệt
/**
 * Giúp ngăn chặn truy cập trái phép
 * Chính sách của trình duyệt --> Ngăn chặn truy cập trái phép
 * CORS sẽ chặn ở những trường hợp nào?
 * 
 * 
 * Origin: scheme + hostname + port
 * Header 
 * Credentials
 * 
 * 
 * HTTP REQUEST ==> SERVER => XỬ LÝ ==> HTTP RESPONSE ==> Trình duyệt block không cho phép truy cập vào response 
 * 
 * Với ác Requets không phải simple request
 * 
 * HTTP Request ==> Trình duyệt ừng Request đó ==> Gửi Request Preflight để thăm dò ==> preflight sẽ trả về response
 * 
 * TH1: preflight có response header thỏa mãn điều kiện --> Cho phép request đang bị dừng chạy tiếp
 * TH2: preflight có response header không thỏa mãn điều kiện --> Block request đang bị dừng
 *  
 * 
 * 
 * 
 * 
 * 
 */