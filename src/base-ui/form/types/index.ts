type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItems {
  field:string
  type:IFormType
  label:string
  placeholder:string
  options?:any[]
  otherOptions?:any
}

export interface ISearchFormConfig {
  formItems:IFormItems[]
  labelWidth?:string
  itemLayout?:any
  colLayout?:any
}