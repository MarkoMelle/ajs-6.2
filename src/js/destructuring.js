export default function destrStats(obj) {
  const {
    id, name, icon, description = 'Описание недоступно',
  } = obj;
  const arr = [id, name, icon, description];
  return arr;
}
