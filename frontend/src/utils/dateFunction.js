export function formatReleaseDate(date) {
    if (!date) return "Không xác định"; // Xử lý nếu không có ngày
  
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) return "Ngày không hợp lệ"; // Kiểm tra nếu `date` không hợp lệ
  
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
     
    }).format(parsedDate);
  }
  