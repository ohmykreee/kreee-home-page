import data from "../data/theme.json"

interface ThemeColor {
  getCurrColor() :string
  getNextColor() :string
  getAllColor() :string[]
}

class ThemeColor implements ThemeColor{
  constructor() {
    this.getCurrColor = this.getCurrColor
    this.getNextColor = this.getNextColor
    this.getAllColor = this.getAllColor
  }

  private _colorList: string[] = data
  private _currColor: string = this._colorList[0]

  getCurrColor(): string {
    return this._currColor
  }

  getNextColor(): string {
    const currIndex: number = this._colorList.indexOf(this._currColor)
    if (currIndex === this._colorList.length - 1) {
      this._currColor = this._colorList[0]
      return this._currColor
    } else {
      this._currColor = this._colorList[currIndex + 1]
      return this._currColor
    }
  }

  getAllColors(): string[] {
    return this._colorList
  }
}

const useThemeColor = new ThemeColor()
export default useThemeColor