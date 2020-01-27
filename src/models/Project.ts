type FeatureType = {
  billPayment: boolean
  phoneDirectory: boolean
  homeSpec: boolean
  financialReport: boolean
}

class Project {
  private id: string
  private name: string
  private code: string
  private feature: FeatureType

  constructor(id: string, name: string, code: string, feature: FeatureType) {
    this.id = id
    this.name = name
    this.code = code
    this.feature = feature
  }
}

export { Project }
