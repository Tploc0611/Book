import { PageData } from '../../types';
import { cleanParagraphs } from '../dataUtils';

const CHAPTER_5_TITLE = "Chương 5: Hành vi Mua của Người tiêu dùng";

export const chap5SecIPageData: PageData = {
  id: 'chap5-secI',
  chapterTitle: CHAPTER_5_TITLE,
  pageTitle: "I. Giới thiệu: Thị trường Tiêu dùng và Mô hình Hành vi Mua",
  paragraphs: cleanParagraphs([
    "Chương 5 của \"Nguyên lý Marketing\" chuyển trọng tâm từ các khái niệm marketing tổng quan sang một khía cạnh cụ thể và quan trọng bậc nhất: thấu hiểu hành vi mua của người tiêu dùng cuối cùng. Mục tiêu của marketing là thu hút người tiêu dùng và xây dựng mối quan hệ lợi nhuận với họ bằng cách tạo ra giá trị khách hàng. Tuy nhiên, để làm được điều này một cách hiệu quả, các nhà marketing trước hết phải hiểu rõ cách người tiêu dùng suy nghĩ và hành động.",
    "<strong>A. Định nghĩa Thị trường Tiêu dùng và Tầm quan trọng của việc Thấu hiểu Khách hàng</strong><br/>Thị trường tiêu dùng (consumer market) bao gồm tất cả các cá nhân và hộ gia đình mua hoặc nhận hàng hóa và dịch vụ cho mục đích tiêu dùng cá nhân. Đây là một thị trường khổng lồ và đa dạng, ví dụ như thị trường tiêu dùng Mỹ với hơn 320 triệu người, tiêu thụ gần 16 nghìn tỷ đô la hàng hóa và dịch vụ mỗi năm, biến nó thành một trong những thị trường hấp dẫn nhất thế giới. Người tiêu dùng trên toàn cầu cũng rất khác nhau về độ tuổi, thu nhập, trình độ học vấn và thị hiếu, đồng thời họ mua một lượng hàng hóa và dịch vụ đa dạng đến khó tin.",
    "Cách thức người tiêu dùng đưa ra quyết định mua hàng rất phức tạp và chịu ảnh hưởng bởi nhiều yếu tố. Thách thức lớn đối với các nhà marketing là làm thế nào để hiểu được tại sao người tiêu dùng lại mua những gì họ mua. \"Hầu hết các công ty lớn nghiên cứu các quyết định mua của người tiêu dùng rất chi tiết để trả lời các câu hỏi về những gì người tiêu dùng mua, họ mua ở đâu, mua như thế nào và bao nhiêu, khi nào họ mua và tại sao họ mua.\" Tuy nhiên, việc tìm hiểu \"tại sao\" không hề đơn giản; câu trả lời thường nằm sâu trong tâm trí người tiêu dùng. Câu hỏi trung tâm đối với các nhà marketing là: \"Người tiêu dùng phản ứng như thế nào đối với các nỗ lực marketing khác nhau mà công ty có thể sử dụng?\"",
    "<strong>B. Mô hình Hành vi Mua của Người tiêu dùng (Hình 5.1)</strong><br/>Điểm khởi đầu cho việc thấu hiểu hành vi mua là mô hình kích thích-phản ứng, được minh họa trong Hình 5.1.1 Mô hình này cho thấy các yếu tố marketing (4P: Sản phẩm, Giá, Phân phối, Xúc tiến) và các yếu tố kích thích khác từ môi trường (Kinh tế, Công nghệ, Xã hội, Văn hóa) đi vào \"hộp đen\" của người tiêu dùng và tạo ra những phản ứng nhất định. Các nhà marketing phải tìm hiểu xem điều gì đang diễn ra bên trong \"hộp đen\" đó.",
    `
<div class="overflow-x-auto py-2">
  <p class="font-semibold text-lg my-3">Bảng 1: Mô hình Hành vi Mua của Người tiêu dùng</p>
  <table class="min-w-full w-full table-auto border-collapse border border-slate-400 prose-sm">
    <thead class="bg-slate-50">
      <tr>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Yếu tố Kích thích (Đầu vào)</th>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">"Hộp đen" của Người tiêu dùng</th>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Phản ứng của Người mua (Đầu ra)</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-slate-200">
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700 align-top">
          Marketing: Sản phẩm, Giá, Phân phối, Xúc tiến<br/><br/>
          Môi trường khác: Kinh tế, Công nghệ, Xã hội, Văn hóa
        </td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700 align-top">
          <strong>Đặc điểm của Người mua:</strong><br/>
          <ul class="list-disc pl-4 my-1">
            <li>Văn hóa</li>
            <li>Xã hội</li>
            <li>Cá nhân</li>
            <li>Tâm lý</li>
          </ul>
          <br/>
          <strong>Quá trình Ra quyết định của Người mua</strong>
        </td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700 align-top">
          Hành vi mua:
          <ul class="list-disc pl-4 my-1">
            <li>Thái độ và sở thích mua</li>
            <li>Hành vi mua (mua gì, khi nào, ở đâu, bao nhiêu)</li>
          </ul>
          <br/>
          Hành vi mối quan hệ với thương hiệu và công ty
        </td>
      </tr>
    </tbody>
  </table>
  <p class="text-xs text-slate-600 mt-1">Nguồn: Tổng hợp từ Hình 5.1 và nội dung Chương 5 [1]</p>
</div>
    `,
    "\"Hộp đen\" của người tiêu dùng có hai phần chính:",
    "<ul class='list-disc pl-5 mb-3'><li><strong>Đặc điểm của người mua:</strong> Bao gồm các yếu tố văn hóa, xã hội, cá nhân và tâm lý ảnh hưởng đến cách người mua nhận thức và phản ứng với các kích thích.</li><li><strong>Quá trình ra quyết định của người mua:</strong> Quy trình này ảnh hưởng đến hành vi mua của người tiêu dùng.</li></ul>",
    "Chương này sẽ tập trung làm rõ hai phần này: các đặc điểm của người mua ảnh hưởng đến hành vi mua, và sau đó là quá trình ra quyết định của người mua.",
    "Mô hình \"hộp đen\" đóng vai trò là một khung khái niệm trung tâm, thừa nhận sự phức tạp của nhận thức và quá trình ra quyết định của con người, những thứ mà các nhà marketing không thể quan sát trực tiếp. Sự nhấn mạnh của Kotler và Armstrong vào việc các nhà marketing phải \"tìm ra những gì bên trong hộp đen của người tiêu dùng\" 1 nhấn mạnh thách thức cốt lõi trong marketing tiêu dùng: đó là suy luận các quá trình nội tại từ các yếu tố đầu vào và hành vi đầu ra có thể quan sát được."
  ]),
};
