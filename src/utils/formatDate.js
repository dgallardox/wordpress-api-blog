export default function formatDate(dateString) {
  const dateObj = new Date(dateString);
  const formattedDate = dateObj.toLocaleDateString("en-GB");
  return formattedDate;
}
