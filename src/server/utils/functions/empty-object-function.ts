//@ts-check

export function isEmpty(obj: Object): boolean {
  return Object.entries(obj).length === 0 && obj.constructor === Object;
}
