/*Author: MonokaiJS
Type: Min*/

var tacpham = [{
	name: "Vợ Nhặt (Kim Lân)",
	count: 0
},	{
	name: "Rừng Xà Nu (Nguyễn Trung Thành)",
	count: 0
},	{
	name: "Vợ chồng A Phủ (Tô Hoài)",
	count: 0
},	{
	name: "Người lái đò Sông Đà (Nguyễn Tuân)",
	count: 0
},	{
	name: "Tây Tiến (Quang Dũng)",
	count: 0
},	{
	name: "Sóng (Xuân Quỳnh)",
	count: 0
},	{
	name: "Chiếc thuyền ngoài xa (Nguyễn Minh Châu)",
	count: 0
},	{
	name: "Việt Bắc (Tố Hữu)",
	count: 0
},	{
	name: "Hồn Trương Ba Da Hàng Thịt (Lưu Quang Vũ)",
	count: 0
},	{
	name: "Ai Đã Đặt Tên Cho Dòng Sông (Hoàng Phủ Ngọc Tường)",
	count: 0
}];
for (i = 1; i <= 10000000; i++){
	tacpham[Math.floor(Math.random() * tacpham.length)].count += 1;
}
var max = 0;
tacpham.forEach((tp, i) => {
	if (tp.count > tacpham[max].count)	max = i
});
console.log(tacpham);
console.log('Tác phẩm có lượt ramdom nhiều nhất là: '+ tacpham[max].name + ' với ' + tacpham[max].count	+ ' lần ramdom trúng!');
