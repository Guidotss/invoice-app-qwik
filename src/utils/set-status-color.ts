export function setStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case "paid":
      return "bg-paid";
    case "pending":
      return "bg-pending";
    case "draft":
      return "bg-draft";
    default:
      return "bg-gray-500";
  }
}


export function setStatusText(status: string) : string {
  switch (status.toLowerCase()) {
    case "paid":
      return "text-paid";
    case "pending":
      return "text-pending";
    case "draft":
      return "text-draft";
    default:
      return "bg-gray-500";
  }
}


export function setCircleColor(status: string) : string {
  switch (status.toLowerCase()) {
    case "paid":
      return "circle-paid";
    case "pending":
      return "circle-pending";
    case "draft":
      return "circle-draft";
    default:
      return "bg-gray-500";
  }
} 