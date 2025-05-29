import { PageData } from '../../types';
import { cleanParagraphs } from '../dataUtils';

const CHAPTER_4_TITLE = "Chương 4: Quản trị Thông tin Marketing để Thấu hiểu Khách hàng";

export const chap4SecIVPageData: PageData = {
  id: 'chap4-secIV',
  chapterTitle: CHAPTER_4_TITLE,
  pageTitle: "IV. Nghiên cứu Marketing",
  paragraphs: cleanParagraphs([
    "<strong>A. Định nghĩa và các tình huống ứng dụng nghiên cứu marketing</strong><br/>Ngoài việc thu thập thông tin tình báo marketing về người tiêu dùng, đối thủ cạnh tranh và những diễn biến chung trên thị trường, các chuyên gia marketing thường cần đến các nghiên cứu chính thống để cung cấp sự thấu hiểu về khách hàng và thị trường cho các tình huống cũng như quyết định marketing cụ thể. <span class=\"text-rose-600\"><strong>Nghiên cứu marketing (Marketing research)</strong></span> được định nghĩa là việc thiết kế, thu thập, phân tích và báo cáo một cách có hệ thống về dữ liệu phù hợp với các tình huống marketing cụ thể mà doanh nghiệp phải đối mặt.",
    "Các doanh nghiệp sử dụng nghiên cứu marketing trong nhiều tình huống khác nhau. Ví dụ, nó giúp các chuyên gia marketing thấu hiểu động cơ, hành vi mua và sự thỏa mãn của người tiêu dùng. Nó cũng hỗ trợ việc đánh giá tiềm năng thị trường và thị phần, hoặc đánh giá hiệu quả của các hoạt động marketing như định giá, sản phẩm, phân phối và quảng bá. Một số doanh nghiệp lớn có bộ phận nghiên cứu marketing riêng, trong khi nhiều doanh nghiệp khác (cả lớn và nhỏ) thường thuê các chuyên gia nghiên cứu bên ngoài để tư vấn và thực hiện các nghiên cứu marketing.",
    "Nghiên cứu marketing đóng vai trò như một cuộc điều tra tập trung để giải quyết những vấn đề không rõ ràng cụ thể hoặc để khám phá các cơ hội đã xác định, bổ sung cho việc quét môi trường rộng hơn, liên tục được cung cấp bởi tình báo marketing. Tài liệu đã phân biệt: \"Trong khi thông tin tình báo marketing liên quan đến việc chủ động theo dõi môi trường marketing tổng thể, nghiên cứu marketing tập trung hơn để đạt được sự thấu hiểu khách hàng, có liên quan đến các quyết định marketing cụ thể.\". Các ví dụ như Starbucks thử nghiệm một món ăn mới trong thực đơn hoặc Samsung đánh giá nhu cầu cho một chiếc TV mới minh họa bản chất tập trung này.",
    "<strong>B. Quy trình nghiên cứu marketing</strong><br/>Quy trình nghiên cứu marketing thường trải qua bốn bước cơ bản, được minh họa trong Hình 4.2 của tài liệu : (1) Xác định vấn đề và mục tiêu nghiên cứu, (2) Phát triển kế hoạch nghiên cứu, (3) Triển khai kế hoạch nghiên cứu – thu thập và phân tích dữ liệu, và (4) Diễn giải và trình bày kết quả. Quy trình có hệ thống này đảm bảo rằng nghiên cứu được tiến hành một cách hiệu quả, mang lại những phát hiện phù hợp và có thể hành động được.",
    `
<div class="overflow-x-auto py-2">
  <p class="font-semibold text-lg my-3">Bảng 2: Quy trình Nghiên cứu Marketing</p>
  <table class="min-w-full w-full table-auto border-collapse border border-slate-400 prose-sm">
    <thead class="bg-slate-50">
      <tr>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Bước</th>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Hành động</th>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Nội dung chi tiết</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-slate-200">
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">1</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Xác định vấn đề và mục tiêu nghiên cứu</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Phối hợp giữa nhà quản trị và nhà nghiên cứu để xác định rõ ràng vấn đề cần giải quyết và các mục tiêu cụ thể của nghiên cứu (Thăm dò, Mô tả, Nhân quả).</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">2</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Phát triển kế hoạch nghiên cứu</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Xác định chính xác thông tin cần thu thập, nguồn dữ liệu (thứ cấp, sơ cấp), phương pháp nghiên cứu, phương thức liên hệ, kế hoạch lấy mẫu, và công cụ nghiên cứu.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">3</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Triển khai kế hoạch nghiên cứu</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Thực hiện thu thập dữ liệu, sau đó xử lý và phân tích dữ liệu đã thu thập được.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">4</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Diễn giải và báo cáo kết quả</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Diễn giải các phát hiện, rút ra kết luận và trình bày báo cáo cho nhà quản trị một cách rõ ràng, hữu ích cho việc ra quyết định.</td>
      </tr>
    </tbody>
  </table>
</div>
    `,
    "Bảng này phác thảo phương pháp khoa học được chấp nhận rộng rãi đối với nghiên cứu marketing. Việc hiểu rõ các bước này là nền tảng cho bất kỳ sinh viên hay chuyên gia marketing nào để tiến hành hoặc ủy thác nghiên cứu một cách hiệu quả.",
    "<strong>1. Xác định vấn đề và mục tiêu nghiên cứu</strong><br/>Đây được coi là bước khó khăn nhất nhưng cũng là quan trọng nhất trong toàn bộ quy trình nghiên cứu, vì nó định hướng cho tất cả các hoạt động tiếp theo. Một vấn đề được xác định sai có thể dẫn đến việc theo đuổi một dự án nghiên cứu tốn kém mà không giải quyết được gốc rễ của vấn đề. Các nhà quản trị marketing và nhà nghiên cứu cần phối hợp chặt chẽ với nhau. Nhà quản trị là người hiểu rõ nhất về quyết định mà họ cần đưa ra và loại thông tin cần thiết, trong khi nhà nghiên cứu hiểu rõ nhất về các phương pháp nghiên cứu marketing và cách thu thập thông tin.",
    "Sau khi vấn đề nghiên cứu được xác định một cách cẩn trọng, nhà quản trị và nhà nghiên cứu cần đặt ra các mục tiêu nghiên cứu. Một dự án nghiên cứu marketing có thể có một trong ba loại mục tiêu sau :",
    "<span class=\"text-rose-600\"><strong>Nghiên cứu thăm dò (Exploratory research):</strong></span> Mục tiêu là thu thập thông tin sơ bộ nhằm giúp xác định vấn đề một cách rõ ràng hơn và đề xuất các giả thuyết ban đầu.",
    "<span class=\"text-rose-600\"><strong>Nghiên cứu mô tả (Descriptive research):</strong></span> Mục tiêu là mô tả các khía cạnh của một vấn đề, tình huống marketing hoặc thị trường, chẳng hạn như tiềm năng thị trường cho một sản phẩm, hoặc đặc điểm nhân khẩu học và thái độ của người tiêu dùng.",
    "<span class=\"text-rose-600\"><strong>Nghiên cứu nhân quả (Causal research):</strong></span> Mục tiêu là kiểm tra các giả thuyết về mối quan hệ nguyên nhân và kết quả. Ví dụ, liệu việc giảm 10% học phí tại một trường đại học có làm tăng số lượng sinh viên đăng ký đủ để bù đắp cho việc giảm học phí đó không?",
    "Các nhà quản trị thường bắt đầu với nghiên cứu thăm dò, sau đó có thể tiến hành nghiên cứu mô tả hoặc nhân quả. Việc trình bày rõ ràng vấn đề và mục tiêu nghiên cứu bằng văn bản là rất quan trọng để đảm bảo sự đồng thuận giữa nhà quản trị và nhà nghiên cứu về mục đích và kết quả mong đợi của nghiên cứu.",
    "<strong>2. Phát triển kế hoạch nghiên cứu</strong><br/>Sau khi đã xác định rõ vấn đề và mục tiêu nghiên cứu, nhà nghiên cứu phải định rõ loại thông tin chính xác cần thu thập, phát triển một kế hoạch để thu thập thông tin đó một cách hiệu quả, và trình bày kế hoạch này cho các nhà quản trị. Kế hoạch nghiên cứu sẽ phác thảo các nguồn dữ liệu hiện có, đồng thời giải thích rõ ràng các phương pháp nghiên cứu cụ thể, cách thức liên hệ, kế hoạch lấy mẫu và những công cụ mà nhà nghiên cứu sẽ sử dụng để thu thập dữ liệu mới.",
    "Xác định nhu cầu thông tin cụ thể: Các mục tiêu nghiên cứu cần được chuyển hóa thành những nhu cầu thông tin cụ thể. Ví dụ, nếu chuỗi nhà hàng Chipotle Mexican Grill muốn tìm hiểu phản ứng của người tiêu dùng đối với việc bổ sung dịch vụ mua hàng không cần xuống xe (drive-thru), nghiên cứu có thể cần tìm hiểu về: đặc điểm nhân khẩu học, kinh tế, lối sống của khách hàng hiện tại; liệu họ có sử dụng drive-thru và nó có phù hợp với họ không; đặc điểm và kiểu sử dụng dịch vụ của khách hàng dùng đồ ăn nhanh và đồ ăn cao cấp; tác động của drive-thru đến trải nghiệm khách hàng tại Chipotle; phản ứng của nhân viên Chipotle; và dự đoán về doanh số, lợi nhuận từ dịch vụ mới này so với việc có thể làm giảm doanh số từ các kênh hiện tại.",
    "Đề xuất bằng văn bản: Kế hoạch nghiên cứu nên được trình bày dưới dạng một đề xuất bằng văn bản, đặc biệt quan trọng đối với các dự án lớn, phức tạp hoặc khi thuê một đơn vị bên ngoài thực hiện. Đề xuất này cần bao gồm các vấn đề quản trị đã được xác định, mục tiêu nghiên cứu, thông tin cần thu thập, lợi ích của thông tin đối với việc ra quyết định của nhà quản trị, và chi phí nghiên cứu ước tính.",
    "Dữ liệu thứ cấp và dữ liệu sơ cấp: Để đáp ứng yêu cầu thông tin, kế hoạch nghiên cứu có thể đề xuất thu thập dữ liệu thứ cấp, dữ liệu sơ cấp, hoặc cả hai.",
    "<span class=\"text-rose-600\"><strong>Dữ liệu thứ cấp (Secondary data):</strong></span> Là những thông tin đã tồn tại ở đâu đó, được thu thập cho một mục đích khác.",
    "<span class=\"text-rose-600\"><strong>Dữ liệu sơ cấp (Primary data):</strong></span> Là những thông tin được thu thập cho một mục đích cụ thể mới được đặt ra.",
    `
<div class="overflow-x-auto py-2">
  <p class="font-semibold text-lg my-3">Bảng 3: So sánh Nguồn Dữ liệu Thứ cấp và Sơ cấp</p>
  <table class="min-w-full w-full table-auto border-collapse border border-slate-400 prose-sm">
    <thead class="bg-slate-50">
      <tr>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Đặc điểm</th>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Dữ liệu Thứ cấp</th>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Dữ liệu Sơ cấp</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-slate-200">
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Định nghĩa</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Thông tin đã tồn tại, thu thập cho mục đích khác.</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Thông tin mới, thu thập cho mục đích nghiên cứu hiện tại.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Nguồn ví dụ</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Cơ sở dữ liệu nội bộ, báo cáo ngành, ấn phẩm chính phủ, dữ liệu từ các công ty nghiên cứu thị trường (Nielsen, IRI).</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Khảo sát, phỏng vấn nhóm tập trung, quan sát, thực nghiệm.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Ưu điểm</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Thu thập nhanh, chi phí thấp hơn, có thể cung cấp dữ liệu mà doanh nghiệp không tự thu thập được.</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Dữ liệu phù hợp trực tiếp với vấn đề nghiên cứu, cập nhật, nguồn gốc rõ ràng.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Nhược điểm</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Có thể không hoàn toàn liên quan, không chính xác, lỗi thời, hoặc thiên vị. Hiếm khi cung cấp đầy đủ thông tin cần thiết.</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Tốn thời gian và chi phí hơn để thu thập. Đòi hỏi kỹ năng thiết kế và triển khai.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Đánh giá cần thiết</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Tính liên quan, chính xác, cập nhật, tính khách quan.</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Tính hợp lệ, độ tin cậy của phương pháp và công cụ thu thập.</td>
      </tr>
    </tbody>
  </table>
</div>
    `,
    "Bảng này cung cấp một sự phân biệt rõ ràng giữa hai loại dữ liệu chính được sử dụng trong nghiên cứu marketing, giúp người đọc hiểu được ưu và nhược điểm của từng loại để đưa ra quyết định phù hợp khi lập kế hoạch nghiên cứu.",
    `
<div class="overflow-x-auto py-2">
  <p class="font-semibold text-lg my-3">Bảng 4: Tổng quan Kế hoạch Thu thập Dữ liệu Sơ cấp</p>
  <p class="text-sm text-slate-600 mb-3">(Dựa trên Bảng 4.1)</p>
  <table class="min-w-full w-full table-auto border-collapse border border-slate-400 prose-sm">
    <thead class="bg-slate-50">
      <tr>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Phương pháp nghiên cứu</th>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Phương thức liên hệ</th>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Kế hoạch lập mẫu</th>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Công cụ nghiên cứu</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-slate-200">
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Quan sát</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Thư tín</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Đơn vị lấy mẫu</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Bảng hỏi</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Khảo sát</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Điện thoại</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Cỡ mẫu</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Công cụ máy móc</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Thực nghiệm</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Trực tiếp</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Thủ tục lấy mẫu</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700"></td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700"></td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Trực tuyến</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700"></td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700"></td>
      </tr>
    </tbody>
  </table>
</div>
    `,
    "Bảng này tóm tắt các quyết định chính cần được đưa ra khi lập kế hoạch thu thập dữ liệu sơ cấp, cung cấp một khung sườn cho việc thiết kế nghiên cứu.",
    "<em>Thu thập dữ liệu thứ cấp:</em><br/>Các nhà nghiên cứu thường bắt đầu bằng việc thu thập dữ liệu thứ cấp. Cơ sở dữ liệu nội bộ của doanh nghiệp là một điểm khởi đầu tốt. Ngoài ra, doanh nghiệp có thể tìm đến các nguồn thông tin bên ngoài rộng lớn, bao gồm việc mua dữ liệu từ các nhà cung cấp chuyên nghiệp như Nielsen (dữ liệu người mua sắm), Experian Simmons (nghiên cứu người tiêu dùng Mỹ), The Future Company (xu hướng lối sống). Các dịch vụ dữ liệu thương mại trực tuyến như ProQuest và LexisNexis cũng cung cấp nguồn thông tin phong phú. Hầu hết các hiệp hội ngành, cơ quan chính phủ, ấn phẩm kinh doanh và phương tiện thông tin đại chúng đều cung cấp thông tin miễn phí. Công cụ tìm kiếm trên internet có thể hữu ích, nhưng cần sử dụng một cách có chọn lọc.",
    "Dữ liệu thứ cấp thường được thu thập nhanh hơn và với chi phí thấp hơn so với dữ liệu sơ cấp. Đôi khi, nó còn cung cấp dữ liệu mà một doanh nghiệp không thể tự thu thập được, ví dụ như dữ liệu kiểm toán cửa hàng bán lẻ từ các công ty như IRI. Tuy nhiên, dữ liệu thứ cấp cũng có những hạn chế. Nhà nghiên cứu hiếm khi có được tất cả dữ liệu cần thiết, và thông tin có thể không hoàn toàn sử dụng được. Do đó, cần phải đánh giá thông tin thứ cấp một cách cẩn thận để đảm bảo tính liên quan (phù hợp với nhu cầu), chính xác (thu thập và báo cáo đáng tin cậy), phù hợp về thời gian (cập nhật), và không thiên vị (thu thập và báo cáo khách quan).",
    "<em>Thu thập dữ liệu sơ cấp:</em><br/>Dữ liệu thứ cấp có thể là điểm khởi đầu tốt, nhưng trong hầu hết các trường hợp, doanh nghiệp cũng phải thu thập dữ liệu sơ cấp. Việc thiết kế kế hoạch thu thập dữ liệu sơ cấp đòi hỏi các quyết định về phương pháp nghiên cứu, phương thức tiếp xúc, kế hoạch lấy mẫu và công cụ nghiên cứu.",
    "<strong>i. Các phương pháp nghiên cứu:</strong>",
    "<span class=\"text-rose-600\"><strong>Nghiên cứu quan sát (Observational research):</strong></span> Là việc thu thập dữ liệu sơ cấp bằng cách quan sát con người, hành động và các tình huống có liên quan một cách trực tiếp. Ví dụ, nhà bán lẻ thực phẩm có thể đánh giá địa điểm cửa hàng mới bằng cách kiểm tra mô hình giao thông và vị trí đối thủ. Fisher-Price có một phòng thí nghiệm (Play Lab) để quan sát phản ứng của trẻ em với đồ chơi mới, giúp họ tạo ra sản phẩm tốt hơn.",
    "<span class=\"text-rose-600\"><strong>Nghiên cứu quan sát thực địa (Ethnographic research):</strong></span> Một dạng nghiên cứu quan sát chuyên sâu, trong đó các nhà quan sát được đào tạo (có thể là nhà dân tộc học, nhà tâm lý học, hoặc nhà nghiên cứu của công ty) được cử đến để quan sát và tương tác với người tiêu dùng trong \"môi trường tự nhiên\" của họ. Ví dụ, các nhóm nghiên cứu của hãng bia Coors thường lui tới các quán bar để hiểu cách người tiêu dùng mua, uống và giao lưu. Hãng tư vấn Landor đã thực hiện chương trình \"Landor Families\", theo dõi 11 gia đình Pháp trong 7 năm, đi sâu vào tủ lạnh và hành vi mua thực phẩm của họ, nhằm khám phá lý do đằng sau hành vi mua hàng.",
    "<em>Ưu điểm:</em> Nghiên cứu quan sát thường mang lại những chi tiết không thể hiện qua các cuộc phỏng vấn truyền thống, giúp tạo ra những thấu hiểu mới mẻ về các hành động vô thức, nhu cầu và cảm xúc chưa được giải thích của khách hàng.",
    "<em>Nhược điểm:</em> Không thể quan sát được thái độ, động cơ hoặc hành vi riêng tư. Hành vi trong dài hạn hoặc nhất thời cũng khó quan sát. Các quan sát có thể rất khó để diễn giải. Do đó, phương pháp này thường được sử dụng kết hợp với các phương pháp thu thập dữ liệu khác.",
    "<span class=\"text-rose-600\"><strong>Nghiên cứu khảo sát (Survey research):</strong></span> Là phương pháp được sử dụng rộng rãi nhất để thu thập dữ liệu sơ cấp, đặc biệt phù hợp để thu thập thông tin mô tả. Doanh nghiệp thường hỏi trực tiếp khách hàng về hiểu biết, thái độ, sở thích hoặc hành vi mua của họ.",
    "<em>Ưu điểm:</em> Tính linh hoạt cao; có thể được sử dụng để thu thập nhiều loại thông tin khác nhau trong nhiều bối cảnh khác nhau, thông qua phỏng vấn qua điện thoại, thư tín, trực tuyến hoặc trực tiếp.",
    "<em>Nhược điểm:</em> Đôi khi người ta không thể trả lời (do không nhớ hoặc chưa từng nghĩ về nó), không sẵn lòng trả lời (về vấn đề riêng tư), trả lời không chính xác (để tỏ ra thông minh hoặc làm hài lòng người phỏng vấn), hoặc những người bận rộn có thể không dành thời gian hoặc cảm thấy bị làm phiền.",
    "<span class=\"text-rose-600\"><strong>Nghiên cứu thực nghiệm (Experimental research):</strong></span> Phù hợp nhất cho việc thu thập thông tin nhân quả. Phương pháp này bao gồm việc lựa chọn các nhóm đối tượng phù hợp, áp dụng những tác động (treatments) khác nhau cho họ, kiểm soát các yếu tố không liên quan, và kiểm tra sự khác biệt trong phản ứng của các nhóm. Qua đó, nghiên cứu thực nghiệm cố gắng giải thích mối quan hệ nguyên nhân và kết quả. Ví dụ, McDonald's có thể sử dụng thực nghiệm để kiểm tra ảnh hưởng của hai mức giá khác nhau đối với doanh số bán một loại sandwich mới tại hai thành phố tương tự nhau.",
    `
<div class="overflow-x-auto py-2">
  <p class="font-semibold text-lg my-3">Bảng 5: So sánh các Phương pháp Nghiên cứu Sơ cấp</p>
  <table class="min-w-full w-full table-auto border-collapse border border-slate-400 prose-sm">
    <thead class="bg-slate-50">
      <tr>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Phương pháp</th>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Mô tả</th>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Ưu điểm</th>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Nhược điểm</th>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Loại thông tin phù hợp</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-slate-200">
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Quan sát</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Quan sát trực tiếp hành vi, hành động, tình huống.</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Cung cấp hiểu biết về hành vi tự nhiên, hành động vô thức.</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Không đo được thái độ, động cơ. Khó giải thích.</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Thăm dò, mô tả hành vi.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Khảo sát</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Hỏi người được phỏng vấn về kiến thức, thái độ, sở thích, hành vi.</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Linh hoạt, thu thập nhiều loại thông tin mô tả.</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Người trả lời có thể không trả lời/trả lời không chính xác.</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Mô tả (thái độ, sở thích, nhân khẩu học).</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Thực nghiệm</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Thao tác các biến để xem xét tác động lên kết quả, kiểm soát các yếu tố khác.</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Xác định quan hệ nhân quả.</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Thiết kế và kiểm soát phức tạp, có thể tốn kém.</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Nhân quả.</td>
      </tr>
    </tbody>
  </table>
</div>
    `,
    "Bảng này giúp làm rõ sự khác biệt, ưu nhược điểm và tính phù hợp của từng phương pháp nghiên cứu sơ cấp chính, hỗ trợ việc lựa chọn phương pháp tối ưu cho mục tiêu nghiên cứu cụ thể.",
    "<strong>ii. Các phương thức liên hệ:</strong><br/>Thông tin có thể được thu thập qua thư tín, điện thoại, phỏng vấn cá nhân (bao gồm phỏng vấn cá nhân và phỏng vấn nhóm tập trung), hoặc trực tuyến. Mỗi phương thức có những ưu và nhược điểm riêng.",
    "<strong>Phỏng vấn qua thư tín:</strong> Có thể thu thập một lượng lớn thông tin với chi phí thấp cho mỗi người trả lời. Người trả lời có thể trung thực hơn và không có định kiến từ người phỏng vấn. Tuy nhiên, phương pháp này không linh hoạt, cần nhiều thời gian để nhận phản hồi và tỷ lệ trả lời thường thấp.",
    "<strong>Phỏng vấn qua điện thoại:</strong> Là một trong những cách tốt nhất để thu thập thông tin nhanh chóng và đảm bảo sự linh hoạt hơn thư tín (người phỏng vấn có thể giải thích câu hỏi). Tỷ lệ trả lời có xu hướng cao hơn. Tuy nhiên, chi phí cho mỗi người trả lời cao hơn, mọi người có thể không muốn trả lời các câu hỏi riêng tư, và có thể có định kiến từ người phỏng vấn. Trong thời đại hạn chế cuộc gọi tiếp thị, người trả lời cũng thường gác máy.",
    "<strong>Phỏng vấn trực tiếp:</strong>",
    "<em>Phỏng vấn cá nhân:</em> Nói chuyện trực tiếp với cá nhân tại nhà, nơi làm việc, trên đường phố, hoặc trung tâm mua sắm. Rất linh hoạt, người phỏng vấn có thể hỏi sâu, giải thích câu hỏi khó, cho xem sản phẩm/quảng cáo. Tuy nhiên, chi phí có thể gấp 3-4 lần phỏng vấn qua điện thoại.",
    "<em>Phỏng vấn nhóm tập trung (Focus Group Interviews):</em> Mời một nhóm nhỏ (thường 6-10 người) gặp một người điều hành được đào tạo để thảo luận về một sản phẩm, dịch vụ, hoặc tổ chức. Người điều hành khuyến khích thảo luận tự do, với hy vọng tương tác nhóm sẽ làm bộc lộ những suy nghĩ và cảm nhận sâu sắc. Các nhà nghiên cứu thường theo dõi qua gương một chiều hoặc video.",
    "<em>Ưu điểm:</em> Là một công cụ nghiên cứu định tính quan trọng, giúp thu được những thấu hiểu sâu sắc và mới mẻ về suy nghĩ, cảm nhận của người tiêu dùng. Có thể quan sát nét mặt, cử chỉ, tương tác nhóm.",
    "<em>Nhược điểm:</em> Các nhóm nhỏ có thể khó khái quát hóa kết quả. Người tham gia không phải lúc nào cũng cởi mở và trung thực về cảm xúc, hành vi thực sự của họ trước mặt người khác.",
    "<em>Thiết kế nhóm tập trung mới:</em> Để khắc phục hạn chế, nhiều nhà nghiên cứu đang thay đổi môi trường (ví dụ: Lexus tổ chức bữa tối tại nhà khách hàng) hoặc sử dụng \"nhóm nhúng\" (immersion groups), nơi người tiêu dùng tương tác trực tiếp và thoải mái với người thiết kế sản phẩm mà không cần người điều hành (ví dụ: The Mom Complex với chương trình \"Mom Immersion Sessions\" giúp các thương hiệu thấu hiểu \"bà mẹ khách hàng\" bằng cách để họ và các nhà marketing cùng làm việc giải quyết vấn đề thương hiệu).",
    "<strong>Nghiên cứu marketing trực tuyến (Online Marketing Research):</strong> Bao gồm việc thu thập dữ liệu sơ cấp thông qua các khảo sát trên internet và di động, các nhóm tập trung trực tuyến, theo dấu vết người tiêu dùng, thực nghiệm, nhóm trực tuyến và cộng đồng thương hiệu.",
    "<em>Khảo sát trực tuyến/di động:</em>",
    "<em>Ưu điểm:</em> Tốc độ nhanh và chi phí thấp là nổi bật nhất. Bảng hỏi có thể được phân phát nhanh chóng đến hàng nghìn người. Phản hồi gần như tức thì. Loại bỏ chi phí bưu điện, điện thoại, người phỏng vấn, xử lý dữ liệu. Các dịch vụ như Snap Surveys và SurveyMonkey giúp cả những nhà nghiên cứu nhỏ dễ dàng thực hiện. Khảo sát trực tuyến cũng tương tác và gắn kết hơn, dễ hoàn thành hơn, ít gây phiền phức hơn, dẫn đến tỷ lệ trả lời cao hơn. Đây là phương tiện tuyệt vời để tiếp cận các đối tượng khó như tuổi teen, người độc thân, giàu có, học vấn cao, và những người bận rộn.",
    "<em>Nghiên cứu định tính trực tuyến:</em>",
    "<em>Phỏng vấn nhóm tập trung trực tuyến:</em> Ví dụ, dịch vụ InterVu của Focus Vision cho phép tiến hành phỏng vấn nhóm tập trung với người tham gia ở các địa điểm xa xôi, đa ngôn ngữ, chi phí thấp, kết quả gần như tức thì.",
    "<em>Theo dõi và nhắm mục tiêu hành vi/xã hội trực tuyến:</em> Lắng nghe trực tuyến (đánh giá, bình luận, blog, mạng xã hội) cung cấp những ý kiến bộc phát, mang cảm xúc mạnh mẽ của người tiêu dùng.",
    "<span class=\"text-rose-600\"><strong>Nhắm mục tiêu theo hành vi (Behavioral targeting):</strong></span> Sử dụng dữ liệu trực tuyến để quảng cáo và chào bán đến những người tiêu dùng cụ thể (ví dụ: thấy quảng cáo iPad trên ESPN sau khi bỏ sản phẩm vào giỏ hàng Amazon nhưng không mua).",
    "<span class=\"text-rose-600\"><strong>Nhắm mục tiêu xã hội (Social targeting):</strong></span> Khai thác các kết nối cá nhân và cuộc trò chuyện từ các trang mạng xã hội (ví dụ: thấy quảng cáo giày mà một người bạn trên Twitter vừa mua từ Zappos).",
    "<em>Hạn chế của nghiên cứu trực tuyến:</em>",
    "<em>Kiểm soát người tham gia:</em> Khó biết người trả lời thực sự là ai khi không thể nhìn thấy họ. Giải pháp: sử dụng cộng đồng tự nguyện tham gia, nhóm người trả lời, hoặc các \"cộng đồng thấu hiểu\" do chính thương hiệu phát triển (ví dụ: NASCAR Fan Council, Allure \"Beauty Enthusiasts\").",
    "<em>Vấn đề riêng tư:</em> Việc khai thác blog, mạng xã hội và các nền tảng internet/di động khác làm dấy lên lo ngại về quyền riêng tư của người tiêu dùng. Nghiên cứu trực tuyến tinh vi có thể vượt qua lằn ranh \"nghe trộm\" người tiêu dùng. Ủy ban Thương mại Liên bang Mỹ (FTC) đã khuyến nghị hệ thống \"Do Not Track\" (Không theo dõi). Người tiêu dùng thường phải đối mặt với sự đánh đổi giữa việc nhận được các đề xuất cá nhân hóa và việc bảo vệ quyền riêng tư của họ.",
    `
<div class="overflow-x-auto py-2">
  <p class="font-semibold text-lg my-3">Bảng 6: So sánh các Phương thức Liên hệ</p>
  <table class="min-w-full w-full table-auto border-collapse border border-slate-400 prose-sm">
    <thead class="bg-slate-50">
      <tr>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Phương thức</th>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Ưu điểm</th>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Nhược điểm</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-slate-200">
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Thư tín</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Chi phí thấp/người, thu thập lượng lớn thông tin, người trả lời trung thực hơn, không định kiến người phỏng vấn.</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Không linh hoạt, thời gian phản hồi lâu, tỷ lệ trả lời thấp.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Điện thoại</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Thu thập nhanh, linh hoạt hơn thư tín, giải thích được câu hỏi khó, tỷ lệ trả lời cao hơn.</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Chi phí/người cao hơn, người trả lời có thể không muốn trả lời câu hỏi riêng tư, có thể có định kiến người phỏng vấn, dễ bị gác máy.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Phỏng vấn cá nhân (trực tiếp)</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Rất linh hoạt, hỏi sâu, cho xem sản phẩm/quảng cáo.</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Chi phí rất cao.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Phỏng vấn nhóm tập trung (trực tiếp)</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Thu được hiểu biết định tính sâu sắc, quan sát được tương tác.</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Mẫu nhỏ khó khái quát hóa, người tham gia có thể không cởi mở.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Nghiên cứu trực tuyến (khảo sát, nhóm tập trung)</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Tốc độ nhanh, chi phí rất thấp, tương tác cao, tiếp cận đối tượng khó, thu thập dữ liệu định tính phong phú.</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Khó kiểm soát người tham gia, vấn đề về quyền riêng tư.</td>
      </tr>
    </tbody>
  </table>
</div>
    `,
    "Bảng này cung cấp một cái nhìn tổng quan về các phương thức liên hệ khác nhau, giúp nhà nghiên cứu lựa chọn phương thức phù hợp nhất dựa trên mục tiêu, ngân sách và đối tượng nghiên cứu.",
    "<strong>iii. Kế hoạch lấy mẫu (Sampling Plan):</strong><br/>Các nhà nghiên cứu marketing thường rút ra kết luận về những nhóm lớn người tiêu dùng bằng việc nghiên cứu một <em>mẫu (sample)</em> nhỏ của tổng thể người tiêu dùng. Mẫu là một bộ phận của tổng thể được chọn trong nghiên cứu marketing nhằm đại diện cho tổng thể đó. Một cách lý tưởng, mẫu phải mang tính đại diện để nhà nghiên cứu có thể ước lượng đúng suy nghĩ và hành vi của tổng thể lớn hơn.",
    "Thiết kế mẫu đòi hỏi ba quyết định chính :",
    "1.  <strong>Đơn vị lấy mẫu (Sampling unit):</strong> Ai sẽ được nghiên cứu? Câu trả lời không phải lúc nào cũng rõ ràng. Ví dụ, để hiểu về quy trình ra quyết định mua ô tô của một gia đình, đối tượng có thể là chồng, vợ, các thành viên khác, nhân viên bán hàng, hay tất cả?",
    "2.  <strong>Cỡ mẫu (Sample size):</strong> Nên bao gồm bao nhiêu người? Mẫu lớn thường cho kết quả đáng tin cậy hơn mẫu nhỏ. Tuy nhiên, mẫu lớn hơn thường tốn kém hơn và không nhất thiết phải lấy mẫu toàn bộ thị trường mục tiêu để có kết quả đáng tin cậy.",
    "3.  <strong>Thủ tục lấy mẫu (Sampling procedure):</strong> Những người trong mẫu nên được lựa chọn như thế nào? Bảng 4.2 trong tài liệu mô tả các loại mẫu khác nhau.",
    `
<div class="overflow-x-auto py-2">
  <p class="font-semibold text-lg my-3">Bảng 7: Các Loại Mẫu</p>
  <p class="text-sm text-slate-600 mb-3">(Dựa trên Bảng 4.2)</p>
  <table class="min-w-full w-full table-auto border-collapse border border-slate-400 prose-sm">
    <thead class="bg-slate-50">
      <tr>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider" colspan="2">Loại Mẫu</th>
        <th class="border border-slate-300 px-3 py-2 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Mô tả</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-slate-200">
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700 font-semibold" rowspan="3">Mẫu xác suất</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Mẫu ngẫu nhiên đơn giản</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Mọi thành viên của tổng thể có cơ hội chọn lựa từ trước và bằng nhau.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Mẫu ngẫu nhiên phân tầng</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Tổng thể được chia thành các nhóm loại trừ lẫn nhau (ví dụ: nhóm tuổi) và mẫu ngẫu nhiên được rút ra từ mỗi nhóm.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Mẫu khối (khu vực)</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Tổng thể được chia thành các nhóm loại trừ lẫn nhau (ví dụ: các khối) và nhà nghiên cứu lấy mẫu của các nhóm để phỏng vấn.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700 font-semibold" rowspan="3">Mẫu phi xác suất</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Mẫu tiện lợi</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Nhà nghiên cứu lựa chọn thành viên tổng thể dễ nhất để lấy thông tin.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Mẫu đánh giá</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Nhà nghiên cứu sử dụng đánh giá của mình để chọn thành viên của tổng thể có triển vọng tốt trong việc cung cấp thông tin chính xác.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Mẫu hạn ngạch</td>
        <td class="border border-slate-300 px-3 py-2 text-sm text-slate-700">Nhà nghiên cứu tìm và phỏng vấn một số người được mô tả ở từng nhóm.</td>
      </tr>
    </tbody>
  </table>
</div>
    `,
    "Với mẫu xác suất, mỗi thành viên của tổng thể có một cơ hội được biết đến để được chọn vào mẫu, và các nhà nghiên cứu có thể tính toán giới hạn độ tin cậy của sai số lấy mẫu. Tuy nhiên, việc lấy mẫu xác suất thường tốn kém và mất nhiều thời gian, do đó các nhà nghiên cứu marketing thường sử dụng mẫu phi xác suất, mặc dù không thể tính toán được sai số lấy mẫu. Các cách lấy mẫu khác nhau có chi phí, giới hạn thời gian, tính chính xác và thuộc tính thống kê khác nhau. Lựa chọn phương án tốt nhất phụ thuộc vào yêu cầu của dự án nghiên cứu.",
    "<strong>iv. Công cụ nghiên cứu:</strong><br/>Trong quá trình thu thập dữ liệu sơ cấp, nhà nghiên cứu marketing có thể lựa chọn hai công cụ nghiên cứu chính là bảng hỏi và các công cụ máy móc.",
    "<strong>Bảng hỏi (Questionnaires):</strong> Cho đến nay, đây là công cụ phổ biến nhất, rất linh hoạt với nhiều cách đặt câu hỏi.",
    "<em>Câu hỏi đóng (Closed-ended questions):</em> Bao gồm tất cả các câu trả lời có sẵn và người trả lời lựa chọn trong số đó (ví dụ: câu hỏi nhiều lựa chọn, câu hỏi theo thang đo/cấp độ). Câu hỏi đóng cung cấp các câu trả lời dễ giải thích và lập bảng biểu hơn.",
    "<em>Câu hỏi mở (Open-ended questions):</em> Cho phép người trả lời trả lời bằng ngôn từ của họ (ví dụ: \"Ý kiến của bạn về hãng hàng không Southwest là gì?\" hoặc hoàn thành câu \"Khi tôi chọn một hãng hàng không, cân nhắc quan trọng nhất là...\"). Những câu hỏi này thường tiết lộ nhiều điều hơn vì không giới hạn nội dung trả lời, đặc biệt hữu ích trong nghiên cứu thăm dò.",
    "<em>Lưu ý về diễn đạt và sắp xếp:</em> Cần sử dụng từ ngữ đơn giản, trực tiếp, không thiên vị. Các câu hỏi nên được sắp xếp theo thứ tự logic, câu hỏi đầu tiên nên tạo sự quan tâm, các câu hỏi khó hoặc mang tính cá nhân nên xếp ở cuối.",
    "<strong>Công cụ máy móc (Mechanical Instruments):</strong> Dùng để giám sát hành vi người tiêu dùng.",
    "<em>Ví dụ:</em> Nielsen Media Research gắn máy đo vào tivi để ghi lại ai xem chương trình nào. Các nhà bán lẻ dùng máy quét thanh toán để ghi lại hành vi mua hàng. Công nghệ GPS trên điện thoại di động được dùng để theo dõi chuyển động của người tiêu dùng.",
    "<span class=\"text-rose-600\"><strong>Marketing thần kinh học (Neuromarketing):</strong></span> Sử dụng công nghệ EEG (điện não đồ) và MRI (chụp cộng hưởng từ) để theo dõi hoạt động điện não, nhằm tìm hiểu cách người tiêu dùng cảm nhận và phản ứng. Các biện pháp này thường được kết hợp với các biện pháp sinh trắc học (nhịp tim, nhịp thở, mồ hôi, chuyển động mắt/mặt) để cung cấp hiểu biết về những gì thu hút hoặc không thu hút người tiêu dùng đối với quảng cáo và marketing của thương hiệu. Ví dụ, Nielsen và Hội đồng Quảng cáo đã sử dụng marketing thần kinh học để cải thiện hiệu quả quảng cáo cho Shelter Pet Project, giúp tăng gấp đôi lưu lượng truy cập vào trang web của dự án sau khi điều chỉnh quảng cáo dựa trên phản ứng não bộ và theo dõi mắt của người xem.",
    "<em>Hạn chế của marketing thần kinh học:</em> Mặc dù có thể đo lường sự tham gia và phản ứng cảm xúc, những phản ứng não bộ này không dễ giải thích. Do đó, marketing thần kinh học thường được sử dụng kết hợp với các phương pháp khác để có bức tranh đầy đủ hơn về những suy nghĩ ẩn của người tiêu dùng.",
    "<strong>3. Triển khai kế hoạch nghiên cứu</strong><br/>Bước này bao gồm việc thu thập, xử lý và phân tích dữ liệu. Công việc này có thể do nhân viên nghiên cứu marketing của doanh nghiệp hoặc các hãng nghiên cứu bên ngoài thực hiện. Trong quá trình triển khai, các nhà nghiên cứu cần theo dõi chặt chẽ để đảm bảo kế hoạch được thực hiện chính xác. Họ phải đề phòng các vấn đề liên quan đến kỹ thuật và công nghệ thu thập dữ liệu, chất lượng của dữ liệu và tính kịp thời của thông tin. Sau khi thu thập, dữ liệu cần được kiểm tra về tính chính xác và tính trọn vẹn, sau đó được mã hóa để phục vụ cho việc phân tích. Cuối cùng, các nhà nghiên cứu sẽ lập bảng kết quả và tính toán các chỉ tiêu thống kê cần thiết.",
    "<strong>4. Diễn giải và báo cáo kết quả</strong><br/>Đây là bước cuối cùng trong quy trình nghiên cứu marketing. Các nhà nghiên cứu thị trường phải diễn giải các kết quả đã phân tích, rút ra những kết luận quan trọng và báo cáo chúng cho các nhà quản trị. Điều quan trọng là nhà nghiên cứu không nên làm các nhà quản trị bị choáng ngợp bởi những con số và các kỹ thuật thống kê phức tạp. Thay vào đó, họ chỉ nên trình bày những kết quả và sự thấu hiểu quan trọng, hữu ích cho việc ra quyết định của nhà quản trị.",
    "Tuy nhiên, việc diễn giải kết quả không nên chỉ là trách nhiệm của riêng người nghiên cứu. Mặc dù họ thường là chuyên gia về thiết kế nghiên cứu và thống kê, nhưng các nhà quản trị marketing lại hiểu rõ hơn về vấn đề nghiên cứu và các quyết định mà họ cần đưa ra dựa trên kết quả đó. Một nghiên cứu tốt nhất cũng sẽ không có nhiều ý nghĩa nếu nhà quản trị chấp nhận một cách mù quáng những diễn giải sai lầm từ nhóm nghiên cứu. Tương tự, các nhà quản trị có thể có xu hướng chấp nhận những kết quả nghiên cứu phù hợp với mong đợi của họ và từ chối những kết quả mà họ không mong đợi. Trong nhiều trường hợp, kết quả có thể được diễn giải theo nhiều cách khác nhau, và các cuộc thảo luận giữa nhà nghiên cứu và nhà quản trị sẽ giúp chỉ ra những diễn giải tốt nhất. Do đó, hai bên phải phối hợp chặt chẽ với nhau khi diễn giải kết quả và cùng chia sẻ trách nhiệm đối với quá trình nghiên cứu cũng như việc đưa ra quyết định cuối cùng."
  ]),
};