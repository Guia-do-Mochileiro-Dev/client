export const formatDate = (date: any) => {
  const newDate = new Date(date)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  return `Adicionado em ${newDate.toLocaleString('pt-br', options as any)}`
}
