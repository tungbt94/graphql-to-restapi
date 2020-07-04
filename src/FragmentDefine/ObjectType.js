import FieldType from './FieldType'
import { html } from 'common-tags'

class ObjectType {
  constructor({ fields, possibleTypes }, typesByName) {
    this.fields = fields
    this.typesByName = typesByName
    this.possibleTypes = possibleTypes
    return this
  }

  valueInFragment() {
    let { fields, typesByName, possibleTypes } = this

    if (possibleTypes) {
      fields = possibleTypes.map((field) => {
        return html` ... on ${field.name} {
        ${new ObjectType(
          typesByName[field.name],
          typesByName,
        ).valueInFragment()}
        }`
      })
    } else {
      fields = fields
        .map((field) => {
          return new FieldType(field, typesByName).valueInFragment()
        })
        .filter((field) => field != null)
    }

    return html` ${fields.join(',\n')} `
  }
}

export default ObjectType
