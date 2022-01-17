export const formatDate = (date) => {
  const newDate = new Date(date)
  return newDate.toLocaleString('pt-br')
}
