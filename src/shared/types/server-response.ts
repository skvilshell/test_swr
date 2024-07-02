export interface ServerResponse<T> {
   data: Array<T>
   prev: number | null
   next: number | null
   last: number | null
   pages: number 
   items: number 
}