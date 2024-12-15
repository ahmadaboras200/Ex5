const fs = require("fs");
const path = require("path");

fs.writeFileSync("all.txt", ""); // تأكد من أن ملف all.txt فارغ في البداية

for (let i = 0; i < 10; i++) {
  const content = fs.readFileSync(`file${i + 1}.txt`, "utf-8"); // استخدام `` لتفسير ${i + 1}
  const lines = content.split("\r\n"); // تقسيم المحتوى إلى أسطر
  const needed = lines.splice(0, i); // حذف أول i أسطر من المحتوى
  fs.writeFileSync("all.txt", needed.join("\r\n") + "\n", { flag: "a" }); // كتابة المحتوى إلى all.txt
}
