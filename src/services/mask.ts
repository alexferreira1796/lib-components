const replaceSpecialChars = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/([^\w]+|\s+)/g, "")
    .replace(/(^-+|-+$)/, ""); // Remove hífens extras do final ou do inicio da string

const applyMask = (value: string, patter: string) => {
  if (!value || !patter) return "";

  let i = 0;
  const v = value.toString();

  return patter.replace(/#/g, _ => v[i++]).replace(/undefined/g, "");
};

const unMask = (value: string) => {
  if (!value) return "";

  return replaceSpecialChars(value);
};

export { applyMask, unMask };
