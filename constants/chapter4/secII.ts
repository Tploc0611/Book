import { PageData } from '../../types';
import { cleanParagraphs } from '../dataUtils';

const CHAPTER_4_TITLE = "Chương 4: Quản trị Thông tin Marketing để Thấu hiểu Khách hàng";

export const chap4SecIIPageData: PageData = {
  id: 'chap4-secII',
  chapterTitle: CHAPTER_4_TITLE,
  pageTitle: "II. Hệ thống Thông tin Marketing (MIS)",
  paragraphs: cleanParagraphs([
    "<strong>A. Định nghĩa và mục đích của MIS</strong><br/>Để quản lý hiệu quả dòng chảy thông tin marketing, các doanh nghiệp cần một Hệ thống Thông tin Marketing (MIS). MIS được định nghĩa là một hệ thống bao gồm con người và các quy trình được thiết kế để đánh giá nhu cầu thông tin, thu thập các thông tin cần thiết, và quan trọng hơn là giúp những người ra quyết định sử dụng thông tin đó để tạo ra và khai thác những thấu hiểu sâu sắc về khách hàng cũng như thị trường. Mục đích của MIS là đảm bảo thông tin đúng được chuyển đến đúng người, vào đúng thời điểm để họ có thể đưa ra các quyết định marketing hiệu quả.",
    "Một MIS không chỉ đơn thuần là một hệ thống công nghệ mà là một hệ thống kinh tế-xã hội, nơi chuyên môn của con người, các quy trình và công nghệ tương tác với nhau để biến dữ liệu thành tài sản chiến lược. Định nghĩa của MIS đã bao gồm \"con người và các quy trình\". Ví dụ về PepsiCo tái cấu trúc bộ phận nghiên cứu thành \"nhóm nghiên cứu sâu khách hàng\", những người đóng vai trò \"đối tác marketing chiến lược\", càng nhấn mạnh yếu tố con người và quy trình chiến lược vượt ra ngoài việc xử lý dữ liệu đơn thuần.",
    "<strong>B. Các thành phần của MIS</strong><br/>Một hệ thống MIS hiệu quả bắt đầu và kết thúc với người sử dụng thông tin, bao gồm các nhà quản trị marketing, các đối tác bên trong và bên ngoài doanh nghiệp. Hệ thống này tương tác với người dùng để đánh giá nhu cầu thông tin của họ. Sau đó, nó tương tác với môi trường marketing để phát triển các thông tin cần thiết thông qua ba nguồn chính: cơ sở dữ liệu nội bộ của doanh nghiệp, các hoạt động tình báo marketing, và hoạt động nghiên cứu thị trường. Cuối cùng, MIS giúp người sử dụng phân tích và vận dụng thông tin để phát triển sự thấu hiểu khách hàng, đưa ra các quyết định marketing, quản lý sự gắn kết và mối quan hệ với khách hàng.",
    "<strong>C. Sơ đồ Hệ thống Thông tin Marketing</strong><br/>Hình 4.1 trong tài liệu cung cấp một cái nhìn tổng quan về cấu trúc và luồng hoạt động của một MIS. Sơ đồ này minh họa cách MIS bắt đầu từ việc xác định nhu cầu của \"Các nhà quản trị marketing và những người sử dụng thông tin khác\". Quá trình này dẫn đến \"Đánh giá nhu cầu thông tin\", sau đó là \"Phát triển thông tin cần thiết\" thông qua các nguồn như \"Dữ liệu nội bộ\", \"Tình báo marketing\", và \"Nghiên cứu marketing\". Thông tin sau khi được phát triển sẽ trải qua giai đoạn \"Phân tích và sử dụng thông tin\", với mục tiêu cuối cùng là \"Đạt được sự thấu hiểu khách hàng và thị trường từ thông tin marketing\". Toàn bộ quy trình này diễn ra trong bối cảnh của \"Môi trường marketing\", bao gồm các yếu tố như \"Thị trường mục tiêu\", \"Kênh marketing\", \"Đối thủ cạnh tranh\", \"Công chúng\", và \"Các yếu tố môi trường vĩ mô\".",
    `
<div class="overflow-x-auto py-2">
  <p class="font-semibold text-lg my-3">Bảng 1: Các thành phần của Hệ thống Thông tin Marketing (MIS)</p>
  <p class="text-sm text-slate-600 mb-3">(Dựa trên Hình 4.1)</p>
  <table class="min-w-full w-full table-auto border-collapse border border-slate-400 prose-sm">
    <thead class="bg-slate-50">
      <tr>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Thành phần Chính</th>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Mô tả</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-slate-200">
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Người sử dụng thông tin</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Nhà quản trị marketing, các đối tác nội bộ và bên ngoài doanh nghiệp.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Đánh giá nhu cầu thông tin</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Xác định loại thông tin cần thiết để hỗ trợ việc ra quyết định.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700 align-top">Phát triển thông tin cần thiết</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">
          Thu thập thông tin từ các nguồn:
          <ul class="list-disc pl-5 my-1">
            <li><strong>Dữ liệu nội bộ:</strong> Thông tin có sẵn từ các nguồn bên trong doanh nghiệp (ví dụ: doanh số, chi phí, dữ liệu khách hàng).</li>
            <li><strong>Tình báo Marketing:</strong> Thông tin công khai về người tiêu dùng, đối thủ cạnh tranh và các diễn biến trên thị trường.</li>
            <li><strong>Nghiên cứu Marketing:</strong> Thu thập dữ liệu một cách có hệ thống cho các tình huống marketing cụ thể.</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Phân tích và sử dụng thông tin</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Xử lý, phân tích dữ liệu để tạo ra các hiểu biết sâu sắc và hỗ trợ việc ra quyết định.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Kết quả</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Sự thấu hiểu về khách hàng và thị trường, làm cơ sở cho việc tạo ra giá trị và xây dựng mối quan hệ với khách hàng.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Bối cảnh</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Môi trường Marketing (bao gồm các yếu tố vi mô như thị trường mục tiêu, kênh phân phối, đối thủ, công chúng và các yếu tố vĩ mô).</td>
      </tr>
    </tbody>
  </table>
</div>
    `,
    "Bảng này đóng vai trò quan trọng vì nó phân tách một cách trực quan MIS, một khung trung tâm của chương. Nó làm rõ các yếu tố đầu vào, quy trình và đầu ra của một phương pháp tiếp cận có hệ thống đối với thông tin marketing, làm cho một hệ thống phức tạp trở nên dễ hiểu."
  ]),
};