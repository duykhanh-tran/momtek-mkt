// Hàm này nhận vào một chuỗi văn bản và chuyển đổi nó thành một "slug"
// Slug là một phiên bản của chuỗi, được tối ưu hóa để sử dụng trong URL.
export const slugify = (text: string): string => {
  if (!text) return '';

  return text
    .toString()
    .toLowerCase()
    .trim()
    // Thay thế các ký tự có dấu của tiếng Việt bằng ký tự không dấu
    .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a')
    .replace(/[èéẹẻẽêềếệểễ]/g, 'e')
    .replace(/[ìíịỉĩ]/g, 'i')
    .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o')
    .replace(/[ùúụủũưừứựửữ]/g, 'u')
    .replace(/[ỳýỵỷỹ]/g, 'y')
    .replace(/đ/g, 'd')
    // Thay thế khoảng trắng và các ký tự đặc biệt bằng dấu gạch ngang
    .replace(/\s+/g, '-')
    // Xóa tất cả các ký tự không phải là chữ cái, số, hoặc dấu gạch ngang
    .replace(/[^\w\-]+/g, '')
    // Thay thế nhiều dấu gạch ngang liên tiếp bằng một dấu
    .replace(/\-\-+/g, '-')
    // Xóa dấu gạch ngang ở đầu và cuối chuỗi
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};