// @flow strict
export type Pet = NewPet & {|
  id: number,
  "x-dashes-id": string,
  snake_case_id: string,
  objectType: {}
|};
export type NewPet = {| name: string, tag: string, category: Category |};
export type ErrorModel = {| code: number, message: string |};
export type IGenericCollectionPet = {| items: Array<Pet> |};
export type IGenericCollectionString = {| items: Array<string> |};
