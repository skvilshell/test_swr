/**
 * Создает ключ для SWR с url параметрами
 * @param key ключ
 * @param params объект с параметрами
 * @returns 
 */
export function getKey(key: string, params: Record<any,any>): string{

   return key + "?" +  new URLSearchParams(params)

}