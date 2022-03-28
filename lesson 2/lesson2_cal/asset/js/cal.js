const program = parseInt(prompt("nhập 1 để bắt đầu chương trình"));
if (program == 1) {
    let homeWork = 0;
    console.log("-----------------------------");
    console.log("chọn 1: Tính tổng");
    console.log("chọn 2: Tính Hiệu");
    console.log("chọn 3: Tính Tích");
    console.log("chọn 4: Tính Thương");
    console.log("chọn 0: đê tắt thoát chương trình");
    console.log("chọn phím bất kỳ để nhập lại");
    let a = parseInt(prompt("nhập a: "));
    let b = parseInt(prompt("nhập b: "));
    let sum = (a, b) => a + b;
    let sub = (a, b) => a - b;
    let mul = (a, b) => a * b;
    let div = (a, b) => a / b;
    do {
        homeWork = parseInt(prompt("nhập tên bài tập bên dưới"));
        switch (homeWork) {
            case 1:
                console.log(`Tổng là: ${sum(a, b)}`);
                break;
            case 2:
                console.log(`Hiệu là: ${sub(a, b)}`);
                break;
            case 3:
                console.log(`Tích là: ${mul(a, b)}`);
                break;
            case 4:
                console.log(`Thương là: ${div(a, b)}`);
                break;
            default:
                console.log("xin vui lòng nhập lại");
            case 0:
                console.log("xin cám ơn");
                break;
        }
    } while (homeWork != 0);
} else {
    alert("Xin cám ơn");
}